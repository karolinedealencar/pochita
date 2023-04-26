/* eslint-disable prefer-destructuring */
import CreateCatService from './service.js'
import {
  CreateCatBodyInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatController {
  static async create(request, reply, server) {
    const body: CreateCatBodyInterface = request.body

    const response: CreateCatResponseInterface = await CreateCatService.create(
      body,
      server
    )
    return reply.send(response)
  }
}

export default CreateCatController
