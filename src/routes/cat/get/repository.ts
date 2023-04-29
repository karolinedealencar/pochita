import { FastifyInstance } from 'fastify'
import { GetCatsResponseInterface } from '../interface.js'

class GetCatsRepository {
  static async getCats(
    server: FastifyInstance
  ): Promise<Array<GetCatsResponseInterface>> {
    const response = await server.pg.query('SELECT name, id FROM cat')
    return response.rows
  }
}

export default GetCatsRepository
