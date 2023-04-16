import { fastify, FastifyInstance } from 'fastify'

const server = fastify({ logger: true })

class ServerRepository {
  static start() {
    return server.listen({ port: 8000 }, (error: Error | null) => {
      if (error) {
        process.exit(1)
      }
    })
  }

  static registerRoutes() {
    return server.register(async (client: FastifyInstance) => {
      client.get(
        '/',
        async (): Promise<string> => 'Welcome to the world of cats! 🐱'
      )
    })
  }
}

export default ServerRepository
