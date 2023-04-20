import { fastify } from 'fastify'

const server = fastify({ logger: true })

class ServerRepository {
  static start() {
    server.listen({ port: 8000 }, (error: Error | null) => {
      if (error) {
        process.exit(1)
      }
    })

    return server
  }
}

export default ServerRepository
