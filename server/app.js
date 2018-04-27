import express from 'express';
import expressValidator from 'express-validator';
import * as v1 from './routes/v1';

const VERSIONS = {
  v1,
};

const urlParser = express.urlencoded({
  extended: true,
});

const jsonParser = express.json({
  extended: true,
});

const app = express();

app
  .use(urlParser)
  .use(jsonParser)
  // use expressValidator after parsing
  .use(expressValidator());

// attach versions
Object.keys(VERSIONS).forEach((v) => {
  // non-api specific router
  const router = express.Router();

  // all routes for specific version
  const routes = VERSIONS[v];

  // attach routes
  Object.keys(routes).forEach((routeId) => {
    routes[routeId](router);
  });

  app
    .use(`/api/${v}`, router);

  // define catchall on extraneous request
  router.all('/*', (req, res) => {
    res.status(501).send({
      msg: 'Not yet implemented. Maybe later?, - catchall',
    });
  });
});

export default app;
