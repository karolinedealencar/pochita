import { fastify, FastifyInstance } from 'fastify'
import postgres from '@fastify/postgres'

import CreateCatController from '../routes/createCat/controller.js'
import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from '../routes/createCat/interface.js'

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

  static registerRoutes() {
    server.register(async (client: FastifyInstance) => {
      client.get(
        '/',
        async (): Promise<string> => 'Welcome to the world of cats! 🐱'
      )
    })

    server.register(async (client: FastifyInstance) => {
      client.post<{
        Body: CreateCatRequestInterface
        Reply: CreateCatResponseInterface
      }>('/', async (request): Promise<CreateCatResponseInterface> => {
        const response: CreateCatResponseInterface =
          await CreateCatController.create(request.body)

        return response
      })
    })
  }

  static registerDatabase() {
    server.register(postgres, {
      connectionString: 'postgres://postgres@localhost/postgres'
    })
  }
}

export default ServerRepository
