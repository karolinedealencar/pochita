import GetCatsService from './service.js'
import { GetCatsResponseInterface } from '../interface.js'

class GetCatsController {
  static async getCats(
    request,
    reply,
    server
  ): Promise<Array<GetCatsResponseInterface>> {
    const response = await GetCatsService.getCats(server)
    return reply.send(response)
  }
}

export default GetCatsController
