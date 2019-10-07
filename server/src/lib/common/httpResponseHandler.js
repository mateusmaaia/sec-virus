import { OK } from './httpCodes';

const httpResponseHandler = (body = null, statusCode = OK) => ({
  body,
  statusCode,
});

export default httpResponseHandler;
