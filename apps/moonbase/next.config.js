const path = require('path');
const { composePlugins, withNx } = require('@nx/next');
const fs = require('fs');

// Check if we should use built version or source
const useBuiltLibrary = fs.existsSync(path.resolve(__dirname, '../../dist/ui-components/index.js'));

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/moonbase' : '';

const nextConfig = {
  nx: {
    svgr: false,
  },
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  experimental: {
    viewTransition: true
  },
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath,
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
