// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.alias['entities'] = false;
        config.resolve.alias['html-to-text'] = false; // Puedes agregar más exclusiones si es necesario
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
