import handlers from 'shortstop-handlers';
import EventEmitter from 'events';
import meddleware from 'meddleware';

const bootstrap = new EventEmitter();

bootstrap.init = function initialize({
  app, dirname, yamlContent, resolver,
}) {
  resolver.use('path', handlers.path(dirname));
  resolver.use('env', handlers.env());
  resolver.use('require', handlers.require(dirname));
  resolver.resolve(yamlContent, (err, meddlewareFlow) => {
    if (err) return this.emit('error', err);
    app.use(meddleware(meddlewareFlow));
    return this.emit('load', app);
  });
};

export default bootstrap;
