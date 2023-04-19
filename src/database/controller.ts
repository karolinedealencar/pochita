import DatabaseService from './service.js'

class DatabaseController {
  static registerOnServer(server) {
    return DatabaseService.registerOnServer(server)
  }

  static connect(server) {
    return DatabaseService.connect(server)
  }
}

export default DatabaseController
