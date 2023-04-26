interface CreateCatResponseInterface {
  id: string
}

interface CreateCatBodyInterface {
  name: string
}

interface GetCatsResponseInterface {
  id: string
  name: string
}

export {
  CreateCatResponseInterface,
  CreateCatBodyInterface,
  GetCatsResponseInterface
}
