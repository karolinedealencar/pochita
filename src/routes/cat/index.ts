import createRouter from './create/router.js'

const catRouter = async server => {
  server.route(createRouter(server))
}

export default catRouter
