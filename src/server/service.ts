import ServerRepository from './repository.js'

class ServerService {
  static start() {
    return ServerRepository.start()
  }

  static registerRoutes() {
    return ServerRepository.registerRoutes()
  }
}

export default ServerService
