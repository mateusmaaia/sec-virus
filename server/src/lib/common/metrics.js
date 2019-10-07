import epimetheus from 'epimetheus';

const instrument = app => epimetheus.instrument(app);

export default {
  instrument,
};
