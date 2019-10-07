import httpErrorResponseHandler from './httpErrorResponseHandler';

const httpFactoryController = callback => async (request, response) => {
  const data = {
    ...request.body,
    ...request.query,
    ...request.params,
  };

  try {
    const content = await callback(data);
    return response.status(content.statusCode).send(content.body);
  } catch (err) {
    const errorResponse = httpErrorResponseHandler(err.message);
    return response.status(errorResponse.statusCode).send(errorResponse.body);
  }
};

export default httpFactoryController;
