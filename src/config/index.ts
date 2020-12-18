import dotnet from 'dotenv';
import path from 'path';

// Get env path
const envPath = path.resolve(__dirname, `${ process.env.ENV_FILE_PATH }`);

// Load variables into .env file
dotnet.config({ path: envPath });

// Assign variables into object
const config = {
  // test: process.env.CONFIG_TEST || ""
};

export default config;