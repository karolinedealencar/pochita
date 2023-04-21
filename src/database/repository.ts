import postgres from '@fastify/postgres'

class DatabasRepository {
  static registerOnServer(server) {
    return server.register(postgres, {
      connectionString:
        'postgres://grbzqwld:gMKcTeZnWSOdSHc2yUGv7SwbCYa6n7md@baasu.db.elephantsql.com/grbzqwld'
    })
  }

  static connect(server) {
    return server.pg.connect()
  }
}

export default DatabasRepository
