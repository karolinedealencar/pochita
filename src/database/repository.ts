import postgres from '@fastify/postgres'

class DatabasRepository {
  static registerOnServer(server) {
    return server.register(postgres, {
      connectionString: ''
    })
  }

  static connect(server) {
    return server.pg.connect()
  }
}

export default DatabasRepository
