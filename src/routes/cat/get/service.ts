import GetCatsRepository from './repository.js'
import { GetCatsResponseInterface } from '../interface.js'

class GetCatsService {
  static async getCats(server): Promise<Array<GetCatsResponseInterface>> {
    return GetCatsRepository.getCats(server)
  }
}

export default GetCatsService
