import RoutesRepository from './repository.js'

class RoutesService {
  static registerOnServer(server) {
    return RoutesRepository.registerOnServer(server)
  }
}

export default RoutesService
