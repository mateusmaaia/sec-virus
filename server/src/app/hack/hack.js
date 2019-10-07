import db from '../../models';
import httpResponseHandler from '../../lib/common/httpResponseHandler';
import httpErrorResponseHandler from '../../lib/common/httpErrorResponseHandler';
import { CREATED, BAD_REQUEST } from '../../lib/common/httpCodes';

const { hack: HackModel } = db;

const create = async (data) => {
  try {
    const info = await HackModel.create(data);
    console.log('Hacked: ', data);
    return httpResponseHandler(info, CREATED);
  } catch (err) {
    return httpErrorResponseHandler(null, BAD_REQUEST);
  }
};

export default create;
