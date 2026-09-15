const path = require('path');
const { config } = require('dotenv');

// it will allow us to sperate the importing of this module from its initialization
// so that any errors thrown by configuration loaders such as invalid config file
// can be caught and properly handeled in try catch block
// otherwise it will result in uncaught error and termination of the process

module.exports = () => {
  const envPath = path.resolve(
    __dirname,
    '..',
    'config',
    `.env.${process.env.NODE_ENV || 'development'}`
  );

  const env = config({ path: envPath });

  if (env.error) {
    throw env.error;
  }

  return {
    server: {
      port: parseInt(env.parsed.SERVER_PORT, 10)
    }
  };
};