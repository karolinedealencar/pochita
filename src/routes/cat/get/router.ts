import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import GetCatsController from './controller.js'

const responseSchema = {
  type: 'array',
  items: {
    id: { type: 'string', minimum: 1 },
    name: { type: 'string', minimum: 1 }
  }
}

const getRouter = (server: FastifyInstance) => ({
  method: 'GET',
  url: '/',
  handler: (request: FastifyRequest, reply: FastifyReply) =>
    GetCatsController.getCats(request, reply, server),
  schema: {
    response: {
      200: responseSchema
    }
  }
})

export default getRouter
