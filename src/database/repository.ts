import postgres from '@fastify/postgres'
import config from '../config.js'

class DatabasRepository {
  static registerOnServer(server) {
    return server.register(postgres, {
      connectionString: config.get('db.connection_string')
    })
  }

  static connect(server) {
    return server.pg.connect()
  }
}

export default DatabasRepository
