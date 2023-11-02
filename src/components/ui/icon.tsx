import { type SVGProps } from 'react';
import { type IconName } from '@/icon-name';
import { cn } from '@utils/cn';

export { IconName };

const sizeClassName = {
	font: 'w-[1em] h-[1em]',
	xs: 'w-3 h-3',
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-7 h-7',
} as const;

type Size = keyof typeof sizeClassName;

const childrenSizeClassName = {
	font: 'gap-1.5',
	xs: 'gap-1.5',
	sm: 'gap-1.5',
	md: 'gap-2',
	lg: 'gap-2',
	xl: 'gap-3',
} satisfies Record<Size, string>;

/**
 * Rend un icône SVG. L'icône prend par défaut la taille de la      police. Pour l'aligner
 * verticalement avec le texte voisin, vous pouvez passer le texte en tant qu'enfant de
 * l'icône et il sera automatiquement aligné.
 * Alternativement, si vous ne voulez pas que l'icône soit à gauche du texte,
 * vous devez envelopper l'icône et le texte dans un parent commun et définir le parent à
 * "flex" (ou "inline-flex") avec "items-center" et un espace raisonnable.
 */
export function Icon({
	name,
	size = 'font',
	className,
	children,
	...props
}: SVGProps<SVGSVGElement> & {
	name: IconName;
	size?: Size;
}) {
	if (children) {
		return (
			<span
				className={`inline-flex items-center ${childrenSizeClassName[size]}`}
			>
				<Icon name={name} size={size} className={className} {...props} />
				{children}
			</span>
		);
	}
	return (
		<svg
			{...props}
			className={cn(sizeClassName[size], 'inline self-center', className)}
		>
			<use href={`./icons/sprite.svg#${name}`} />
		</svg>
	);
}
