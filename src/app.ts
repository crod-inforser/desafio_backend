import config from 'config';
import morgan from 'morgan';

import app from './server';

if (config.get('NODE_ENV') === 'development') { app.use(morgan('dev')); }

app.listen(config.get('PORT'));
console.log(`listening on port ${config.get('PORT')}`);
