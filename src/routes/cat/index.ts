import createRouter from './create/router.js'
import getRouter from './get/router.js'

const catRouter = async server => {
  server.route(createRouter(server))
  server.route(getRouter(server))
}

export default catRouter
