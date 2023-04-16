import { fastify, FastifyInstance } from 'fastify'

import CreateCatController from '../routes/createCat/controller.js'
import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from '../routes/createCat/interface.js'

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
}

export default ServerRepository
