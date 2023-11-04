import { FastifyInstance } from 'fastify'
import OAuthRouter from './oauth/index.js'

class RoutesRepository {
  static registerOnServer(server: FastifyInstance) {
    server.register(OAuthRouter, { prefix: '/api/v1/oauth' })
  }
}

export default RoutesRepository
