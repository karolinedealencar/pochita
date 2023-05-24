import DatabaseRepository from '../../../src/database/repository'

describe('registerOnServer function', () => {
  const serverMock = {
    register () {
      return {
        pg: {
          connect () {}
        }
      }
    }
  }

  it('should have postgres property on server', async () => {
    const server = await DatabaseRepository.registerOnServer(serverMock)
    expect(server).toHaveProperty('pg')
  })
})

describe('connect function', () => {
  const serverMock = {
    pg: {
      connect () {
        return {
          username: 'test'
        }
      }
    }
  }

  it('should have postgres username property', async () => {
    const database = await DatabaseRepository.connect(serverMock)
    expect(database).toHaveProperty('username')
  })
})