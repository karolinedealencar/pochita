import CreateCatController from './create/controller.js'

const catRouter = async server => {
  server.route({
    method: 'POST',
    url: '/',
    handler: (request, reply) =>
      CreateCatController.create(request, reply, server)
  })
}

export default catRouter
