import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatRepository {
  static create(
    request: CreateCatRequestInterface
  ): CreateCatResponseInterface {
    console.log(request)

    return {
      name: 'lira',
      success: true
    }
  }
}

export default CreateCatRepository
