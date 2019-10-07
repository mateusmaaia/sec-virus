import { OK, METHOD_NOT_ALLOWED } from '../../lib/common/httpCodes';

export default (router) => {
  router.get('/', (req, res) => {
    res.status(OK).send({ alive: 'Why the blood run hold' });
  });

  router.post('/', (req, res) => {
    res.status(METHOD_NOT_ALLOWED).send();
  });
};
