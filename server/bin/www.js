import app from '../app';
import { umzug } from '../models';


Promise.resolve()
  .then(() => {
    // run pending migrations for envs other than test
    return process.env.NODE_ENV === 'test'
    ? undefined
    : umzug.up()
  })
  .then(() => {
    return app.set('port', parseInt(process.env.PORT, 10) || 8000);
  })
  .then(() => {
    return app.listen(app.get('port'));
  });
