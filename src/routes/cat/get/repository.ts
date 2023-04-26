import { GetCatsResponseInterface } from '../interface.js'

class GetCatsRepository {
  static async getCats(server): Promise<Array<GetCatsResponseInterface>> {
    const response = await server.pg.query('SELECT name, id FROM cat')
    return response.rows
  }
}

export default GetCatsRepository
