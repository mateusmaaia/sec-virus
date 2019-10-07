import { createLogger, format, transports } from 'winston';
import os from 'os';
import Sentry from 'winston-sentry';
import dotenv from 'dotenv';
import packageJson from '../../../package.json';

dotenv.config();


const { combine, printf, splat } = format;
const host = os.hostname();
const {
  product,
  version,
  type,
  name: application,
} = packageJson;

const LOG_SEVERITY = Object.freeze({
  emerg: 0,
  alert: 1,
  crit: 2,
  err: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7,
});

const logger = createLogger({
  format: combine(splat(), printf((data) => {
    const log = Object.assign({}, data, {
      timestamp: Date.now(),
      host,
      level: LOG_SEVERITY[data.level],
      version: '1.1',
      _product: product,
      _application: application,
      _app_version: version,
      _environment: process.env.NODE_ENV,
      _log_type: type,
    });
    return JSON.stringify(log).replace(/\\/g, '');
  })),
  transports: [new transports.Console({
    level: process.env.LOG_LEVEL || 'info',
    handleExceptions: true,
  })],
});

if (process.env.NODE_ENV === 'prod') {
  logger.add(new Sentry({
    patchGlobal: true,
    level: 'error',
    dsn: process.env.SENTRY_SERVICE_LOG_DNS,
  }));
}

export default logger;
