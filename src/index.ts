import ServerController from './server/controller.js'
import DatabaseController from './database/controller.js'

const start = async () => {
  const server = await ServerController.start()
  await ServerController.registerRoutes()

  await DatabaseController.registerOnServer(server)
  await DatabaseController.connect(server)
}

start()
