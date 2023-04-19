import DatabaseRepository from './repository.js'

class DatabasService {
  static registerOnServer(server) {
    return DatabaseRepository.registerOnServer(server)
  }

  static connect(server) {
    return DatabaseRepository.connect(server)
  }
}

export default DatabasService
