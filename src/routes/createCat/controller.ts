import CreateCatService from './service.js'
import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatController {
  static create(
    request: CreateCatRequestInterface
  ): CreateCatResponseInterface {
    return CreateCatService.create(request)
  }
}

export default CreateCatController
