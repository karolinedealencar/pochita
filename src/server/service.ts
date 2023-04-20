import ServerRepository from './repository.js'

class ServerService {
  static start() {
    return ServerRepository.start()
  }
}

export default ServerService
