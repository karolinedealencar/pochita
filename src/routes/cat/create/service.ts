import CreateCatRepository from './repository.js'
import {
  CreateCatBodyInterface,
  CreateCatResponseInterface
} from '../interface.js'

class CreateCatService {
  static create(
    body: CreateCatBodyInterface,
    server
  ): Promise<CreateCatResponseInterface> {
    return CreateCatRepository.create(body, server)
  }
}

export default CreateCatService
