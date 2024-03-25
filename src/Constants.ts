import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../config.env') });

export const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY;
export const PORT = process.env.PORT;
