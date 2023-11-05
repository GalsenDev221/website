import * as path from 'node:path';
import { $ } from 'execa';
import fsExtra from 'fs-extra';
import { parse } from 'node-html-parser';
import pkg from 'glob';
const { glob } = pkg;

const cwd = process.cwd();
const inputDir = path.join(cwd, 'other', 'svg-icons');
const inputDirRelative = path.relative(cwd, inputDir);
const typeDir = path.join(cwd, 'types');
const outputDir = path.join(cwd, 'public', 'icons');

await fsExtra.ensureDir(typeDir);
await fsExtra.ensureDir(outputDir);

const files = glob
	.sync('**/*.svg', {
		cwd: inputDir,
	})
	.sort((a, b) => a.localeCompare(b));

const shouldVerboseLog = process.argv.includes('--log=verbose');
const logVerbose = shouldVerboseLog ? console.log : () => {};

if (files.length === 0) {
	console.log(`Aucun fichier SVG trouvé dans ${inputDirRelative}`);
} else {
	await generateIconFiles();
}

async function generateIconFiles() {
	const spriteFilepath = path.join(outputDir, 'sprite.svg');
	const typeOutputFilepath = path.join(typeDir, 'name.d.ts');
	const currentSprite = await fsExtra
		.readFile(spriteFilepath, 'utf8')
		.catch(() => '');
	const currentTypes = await fsExtra
		.readFile(typeOutputFilepath, 'utf8')
		.catch(() => '');

	const iconNames = files.map((file) => iconName(file));

	const spriteUpToDate = iconNames.every((name) =>
		currentSprite.includes(`id=${name}`)
	);
	const typesUpToDate = iconNames.every((name) =>
		currentTypes.includes(`"${name}"`)
	);

	if (spriteUpToDate && typesUpToDate) {
		logVerbose(`Les icônes sont à jour.`);
		return;
	}

	logVerbose(`Génération du sprite pour ${inputDirRelative}`);

	const spriteChanged = await generateSvgSprite({
		files,
		inputDir,
		outputPath: spriteFilepath,
	});

	for (const file of files) {
		logVerbose('✅', file);
	}
	logVerbose(`Saved to ${path.relative(cwd, spriteFilepath)}`);

	const stringifiedIconNames = iconNames.map((name) => JSON.stringify(name));

	const typeOutputContent = `// Ce fichier est généré par npm run build:icons

export type IconName =
\t| ${stringifiedIconNames.join('\n\t| ')};
`;
	const typesChanged = await writeIfChanged(
		typeOutputFilepath,
		typeOutputContent
	);

	logVerbose(`Manifest saved to ${path.relative(cwd, typeOutputFilepath)}`);

	const readmeChanged = await writeIfChanged(
		path.join(outputDir, 'README.md'),
		`# Icons

Cet annuaire contient des icônes SVG utilisées par l'application.

Tout ce qui se trouve dans cet annuaire est généré par \`npm run build:icons\`.
`
	);

	if (spriteChanged || typesChanged || readmeChanged) {
		console.log(`Icônes générées : ${files.length}`);
	}
}

function iconName(file) {
	return file.replace(/\.svg$/, '');
}

/**
 * Creates a single SVG file that contains all the icons
 */
async function generateSvgSprite({ files, inputDir, outputPath }) {
	// Each SVG becomes a symbol and we wrap them all in a single SVG
	const symbols = await Promise.all(
		files.map(async (file) => {
			const input = await fsExtra.readFile(path.join(inputDir, file), 'utf8');
			const root = parse(input);

			const svg = root.querySelector('svg');
			if (!svg) throw new Error('No SVG element found');

			svg.tagName = 'symbol';
			svg.setAttribute('id', iconName(file));
			svg.removeAttribute('xmlns');
			svg.removeAttribute('xmlns:xlink');
			svg.removeAttribute('version');
			svg.removeAttribute('width');
			svg.removeAttribute('height');

			return svg.toString().trim();
		})
	);

	const output = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<!-- Ce fichier est généré par npm run build:icons -->`,
		`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">`,
		`<defs>`, // for semantics: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs
		...symbols,
		`</defs>`,
		`</svg>`,
		'', // trailing newline
	].join('\n');

	return writeIfChanged(outputPath, output);
}

async function writeIfChanged(filepath, newContent) {
	const currentContent = await fsExtra
		.readFile(filepath, 'utf8')
		.catch(() => '');
	if (currentContent === newContent) return false;
	await fsExtra.writeFile(filepath, newContent, 'utf8');
	await $`prettier --write ${filepath} --ignore-unknown`;
	return true;
}
