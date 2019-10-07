import express from 'express';
import dotenv from 'dotenv';
import yaml from 'js-yaml';
import fs from 'fs';
import _ from 'lodash';
import bodyParser from 'body-parser';
import bootstrap from './lib/bootstrap';
import utils from './lib/common/util';
import db from './models';
import logger from './lib/common/logger';
import metrics from './lib/common/metrics';

const resolver = require('shortstop').create();

dotenv.config();

const PORT = process.env.PORT || 5052;
const app = express();

function configApp() {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  metrics.instrument(app);


  try {
    const yamlContent = yaml.safeLoad(fs.readFileSync('./src/config/middlewares.yml', 'utf8'));
    bootstrap.init({
      app,
      dirname: __dirname,
      yamlContent,
      resolver,
    });
  } catch (err) {
    logger.error('Critical error when loading middleware flow. The files exists or is valid? ', err.stack);
  }
}

async function startDatabase() {
  let sequelizeForceSync = { force: true };
  if (process.env.FORCE_SYNC === 'TRUE') {
    sequelizeForceSync = { force: true };
  }

  await db.sequelize.sync(sequelizeForceSync);
}

async function startApp() {
  if (_.isEmpty(process.env.NODE_ENV)) {
    throw new Error('Environment not defined!');
  }

  startDatabase();
  configApp();

  bootstrap.on('load', (_app) => {
    _app.listen(PORT, (err) => {
      if (err) {
        logger.error('Cant listen the application. Kerberos is dead x.x', err.stack);
      }

      logger.info(`Kerberos is running at ${PORT}.`);
      utils.showKerberos();
    });
  });
}

export {
  app,
  configApp,
  startApp,
};

export default app;
