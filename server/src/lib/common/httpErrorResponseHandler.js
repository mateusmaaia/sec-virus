import { INTERNAL_SERVER_ERROR } from './httpCodes';

const httpErrorResponseHandler = (message = null, statusCode = INTERNAL_SERVER_ERROR) => ({
  body: { error: statusCode, message },
  statusCode,
});

export default httpErrorResponseHandler;
