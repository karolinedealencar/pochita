import CreateCatService from './service.js'
import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatController {
  static create(
    body: CreateCatRequestInterface
  ): CreateCatResponseInterface {
    return CreateCatService.create(body)
  }
}

export default CreateCatController
