import {
  CreateCatRequestInterface,
  CreateCatResponseInterface
} from './interface.js'

class CreateCatRepository {
  static create(body: CreateCatRequestInterface): CreateCatResponseInterface {
    console.log(body)

    return {
      name: 'lira',
      success: true
    }
  }
}

export default CreateCatRepository
