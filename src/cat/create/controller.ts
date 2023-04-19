import CreateCatService from './service.js'
import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatController {
  static create(
    body: CreateCatRequestInterface,
    server
  ): Promise<CreateCatResponseInterface> {
    return CreateCatService.create(body, server)
  }
}

export default CreateCatController
