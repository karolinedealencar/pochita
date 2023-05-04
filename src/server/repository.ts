import { fastify, FastifyInstance } from 'fastify'
import config from '../config.js'

const server: FastifyInstance = fastify({ logger: true })

class ServerRepository {
  static async start() {
    server.listen(
      { host: config.get('ip'), port: config.get('port') },
      (error: Error | null) => {
        if (error) {
          process.exit(1)
        }
      }
    )

    return server
  }
}

export default ServerRepository
