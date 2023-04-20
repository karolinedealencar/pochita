/* eslint-disable prefer-destructuring */
import CreateCatService from './service.js'
import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatController {
  static async create(request, reply, server) {
    const body: CreateCatRequestInterface = request.body

    const response: CreateCatResponseInterface = await CreateCatService.create(
      body,
      server
    )
    return reply.send(response)
  }
}

export default CreateCatController
