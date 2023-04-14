const fastify = require('fastify')
const server = fastify()

class ServerRepository {
  static start() {
    server.listen({ port: 8000 }, (error: Error, address: string) => {
      if (error) {
        process.exit(1)
      }

      console.log(`Listening at address ${address}`)
    })
  }
}

module.exports = ServerRepository
