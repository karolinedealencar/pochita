import {
  CreateCatBodyInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatRepository {
  static async create(
    body: CreateCatBodyInterface,
    server
  ): Promise<CreateCatResponseInterface> {
    const result = await server.pg.query(
      'INSERT INTO cat(name) VALUES ($1) RETURNING id',
      [body.name]
    )

    return {
      id: result.rows[0].id
    }
  }
}

export default CreateCatRepository
