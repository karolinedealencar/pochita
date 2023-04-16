import ServerRepository from './repository.js'

class ServerService {
  static start() {
    return ServerRepository.start()
  }

  static registerRoutes() {
    return ServerRepository.registerRoutes()
  }

  static registerDatabase() {
    return ServerRepository.registerDatabase()
  }
}

export default ServerService
