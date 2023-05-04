describe('start function', () => {
  let server

  beforeAll(async () => {
    const serverMock: any = jest.createMockFromModule('../../../src/server/repository')
    serverMock.start = jest.fn(async () => ({
      register () {},
    }))

    server = await serverMock.start()
  })

  it('should have register property when started', async () => {
    expect(server).toHaveProperty('register')
  })

  it('should not have connect property when started', async () => {
    expect(server).not.toHaveProperty('connect')
  })
})
