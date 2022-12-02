import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

export default async function connectDB() {
  try {
    console.log('connecting to database');
    await connect(
      `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}`
      + `@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}`
      + `/${process.env.MONGODB_DATABASE_NAME}?authSource=${process.env.MONGODB_AUTH_DATABASE_NAME}`,
    );
    console.log('Database connected successfully');
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}
