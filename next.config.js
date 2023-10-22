/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/degyjrpjj/image/upload/**',
			},
		],
	},
};

module.exports = nextTranslate(nextConfig);
