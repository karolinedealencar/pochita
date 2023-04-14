const ServerRepository = require('./repository')

class ServerService {
  static start() {
    return ServerRepository.start()
  }
}

module.exports = ServerService
