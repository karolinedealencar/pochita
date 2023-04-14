const ServerService = require('./service')

class ServerController {
  static start() {
    return ServerService.start()
  }
}

module.exports = ServerController
