import CreateCatRepository from './repository.js'
import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatService {
  static create(
    request: CreateCatRequestInterface
  ): CreateCatResponseInterface {
    return CreateCatRepository.create(request)
  }
}

export default CreateCatService
