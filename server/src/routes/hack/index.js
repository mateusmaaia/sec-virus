import {
  hack,
} from '../../app/hack';
import httpFactoryController from '../../lib/common/httpFactoryController';

export default (router) => {
  router.post('/', httpFactoryController(hack));
};
