const { composePlugins, withNx } = require('@nx/next');
const path = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    // This allows Next.js to resolve packages from the workspace
    externalDir: true,
  },
  webpack: (config, { isServer }) => {
    // Add the path mapping for webpack to resolve properly
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
