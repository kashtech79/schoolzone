import * as dotenv from 'dotenv';

const result = dotenv.config();

if (result?.error) {
  throw new Error('Add .env file');
}

export const config = {
  env: process.env.SZ_ENV,
  appName: process.env.SZ_APP,
  port: process.env.SZ_PORT,
  mongoUri: `mongodb+srv://service:school123@schoolzone.vyian.mongodb.net/test?authSource=admin&replicaSet=atlas-nn67ik-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
};
