import ServerService from './service.js'

class ServerController {
  static start() {
    return ServerService.start()
  }

  static registerRoutes() {
    return ServerService.registerRoutes()
  }

  static registerDatabase() {
    return ServerService.registerDatabase()
  }

  static connectDatabase() {
    return ServerService.connectDatabase()
  }
}

export default ServerController
