import config from 'config';
import createApp from './server';
import connectDB from './database';

connectDB();

const app = createApp();

app.listen(config.get('PORT'));
console.log(`listening on port ${config.get('PORT')}`);
