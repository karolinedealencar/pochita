import CreateCatRepository from './repository.js'
import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatService {
  static create(
    body: CreateCatRequestInterface,
    server
  ): Promise<CreateCatResponseInterface> {
    return CreateCatRepository.create(body, server)
  }
}

export default CreateCatService
