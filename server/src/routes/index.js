import { OK } from '../lib/common/httpCodes';

export default (router) => {
  router.get('/', (req, res) => {
    res.status(OK).send('I hear you calling Marian!');
  });
};
