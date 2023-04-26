import dotenv from 'dotenv'
import convict from 'convict'

dotenv.config()

const config = convict({
  db: {
    connection_string: {
      doc: 'Database connection string',
      format: String,
      env: 'DATABASE_CONNECTION_STRING',
      default: ''
    }
  }
})

export default config
