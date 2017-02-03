import http from 'http';
import logger from 'winston';

/**
 * Server implementation.
 */
class Server {

  /**
   * Constructor.
   * @param  {ServerEngine} engine
   */
  constructor(engine) {
    this.engine_ = engine;
    this.server_ = http.createServer(engine);
  }

  /**
   * Gets the current engine used in the server instance.
   * @return {ServerEngine}
   */
  getEngine() {
    return this.engine_;
  }

  /**
   * Gets the http server.
   * @return {[type]} [description]
   */
  getServer() {
    return this.server_;
  }

  /**
   * Starts listening to specified host and port.
   * @param  {integer} port
   * @param  {string} host
   * @param  {Function} cb
   * @return {Server}
   */
  listen(port = 3000, host = 'localhost') {
    this.getServer().listen(port, host, () => {
      logger.info('[SERVER]', `Address: http://${host}:${port}`);
    });

    return this;
  }

  /**
   * Closes http server.
   * @param  {Function} cb
   * @return {boolean}
   */
  close(cb) {
    return this.getServer().close(cb);
  }
}

export default Server;
