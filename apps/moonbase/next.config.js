const path = require('path');

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  basePath: '/moonbase', // Replace with your actual repository name
  assetPrefix: '/moonbase/',
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  transpilePackages: ['@moonbase/ui-components'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@moonbase/ui-components': path.resolve(__dirname, '../../ui-components/src/index.ts'),
    };
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
