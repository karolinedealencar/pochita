import ServerController from './server/controller.js'

const start = async () => {
  await ServerController.start()
  await ServerController.registerRoutes()
}

start()
