import { connect } from 'mongoose';
import c from 'config';

export default async function connectDB() {
  try {
    console.log('connecting to database');
    await connect(
      `mongodb://${c.get('MONGODB_USERNAME')}:${c.get('MONGODB_PASSWORD')}`
      + `@${c.get('MONGODB_HOST')}:${c.get('MONGODB_PORT')}`
      + `/${c.get('MONGODB_DATABASE_NAME')}?authSource=${c.get('MONGODB_AUTH_DATABASE_NAME')}`,
    );
    console.log('Database connected successfully');
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}
