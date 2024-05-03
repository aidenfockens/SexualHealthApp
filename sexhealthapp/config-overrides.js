const path = require('path');

    module.exports = {
      webpack: function (config, env) {
        // Add polyfills for Node.js core modules
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          path: require.resolve('path-browserify'),
          util: require.resolve('util/'),
        };
    
        return config;
      },
    };