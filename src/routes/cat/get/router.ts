import GetCatsController from './controller.js'

const responseSchema = {
  type: 'array',
  items: {
    id: { type: 'string', minimum: 1 },
    name: { type: 'string', minimum: 1 }
  }
}

const getRouter = server => ({
  method: 'GET',
  url: '/',
  handler: (request, reply) =>
    GetCatsController.getCats(request, reply, server),
  schema: {
    response: {
      200: responseSchema
    }
  }
})

export default getRouter
