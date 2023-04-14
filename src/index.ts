const fastify = require('fastify')
const logger = require('./utils/logger/index')

const server = fastify()

const start = () => {
  logger.info('Starting program')

  server.listen({ port: 800 }, (error: Error, address: string) => {
    if (error) {
      logger.info(`Error at server listening: ${error}`)
      process.exit(1)
    }

    logger.info(`Server listening at ${address}`)
  })
}

start()
