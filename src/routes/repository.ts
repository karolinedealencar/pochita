import catRouter from './cat/router.js'

class RoutesRepository {
  static registerOnServer(server) {
    server.register(catRouter, { prefix: '/api/v1/cat' })
  }
}

export default RoutesRepository
