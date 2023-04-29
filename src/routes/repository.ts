import { FastifyInstance } from 'fastify'
import catRouter from './cat/index.js'

class RoutesRepository {
  static registerOnServer(server: FastifyInstance) {
    server.register(catRouter, { prefix: '/api/v1/cat' })
  }
}

export default RoutesRepository
