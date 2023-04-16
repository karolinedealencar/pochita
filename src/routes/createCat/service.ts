import CreateCatRepository from './repository.js'
import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatService {
  static create(body: CreateCatRequestInterface): CreateCatResponseInterface {
    return CreateCatRepository.create(body)
  }
}

export default CreateCatService
