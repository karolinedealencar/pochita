import SercerRepository from '../../../src/server/repository'

describe('start function', () => {
  let server

  beforeAll(async () => {
    server = await SercerRepository.start()
  })

  it('should have register property when started', async () => {
    expect(server).toHaveProperty('register')
  })

  it('should not have connect property when started', async () => {
    expect(server).not.toHaveProperty('connect')
  })

  afterAll(async () => {
    await server.close()
  })
})
