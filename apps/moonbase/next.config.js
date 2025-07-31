const path = require('path');
const { composePlugins, withNx } = require('@nx/next');

const nextConfig = {
  nx: {
    svgr: false,
  },
  basePath: '/moonbase',
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

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
