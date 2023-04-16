import ServerService from './service.js'

class ServerController {
  static start() {
    return ServerService.start()
  }

  static registerRoutes() {
    return ServerService.registerRoutes()
  }
}

export default ServerController
