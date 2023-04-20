import RoutesService from './service.js'

class RoutesController {
  static registerOnServer(server) {
    return RoutesService.registerOnServer(server)
  }
}

export default RoutesController
