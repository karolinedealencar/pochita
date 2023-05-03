import ServerRepository from '../../../src/server/repository'

describe('server repository', () => {
  it('should return something', () => {
    expect(ServerRepository.start()).toBeDefined()
  })
})
