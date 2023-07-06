/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'propel.community',
			},
			{
				protocol: 'https',
				hostname: 'xarala.co',
			},
		],
	},
};

module.exports = nextTranslate(nextConfig);
