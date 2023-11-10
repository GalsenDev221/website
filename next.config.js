const nextTranslate = require('next-translate-plugin');
/** @type {import('next').NextConfig} */
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
