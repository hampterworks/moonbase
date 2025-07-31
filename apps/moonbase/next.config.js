const path = require('path');
const { composePlugins, withNx } = require('@nx/next');
const fs = require('fs');

// Check if we should use built version or source
const useBuiltLibrary = fs.existsSync(path.resolve(__dirname, '../../dist/ui-components/index.js'));

const nextConfig = {
  nx: {
    svgr: false,
  },
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Add basePath for GitHub Pages if needed
  basePath: process.env.NODE_ENV === 'production' ? '/moonbase' : '',
  transpilePackages: ['@moonbase/ui-components'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@moonbase/ui-components': useBuiltLibrary
        ? path.resolve(__dirname, '../../dist/ui-components')
        : path.resolve(__dirname, '../../ui-components/src/index.ts'),
    };
    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
