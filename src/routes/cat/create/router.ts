import CreateCatController from './controller.js'

const bodySchema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 2 }
  },
  required: ['name']
}

const responseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', minimum: 1 }
  }
}

const createRouter = server => ({
  method: 'POST',
  url: '/',
  handler: (request, reply) =>
    CreateCatController.create(request, reply, server),
  schema: {
    body: bodySchema,
    response: {
      200: responseSchema
    }
  }
})

export default createRouter
