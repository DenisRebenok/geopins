const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config()

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const { findOrCreateUser } = require('./controllers/userController')

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    dbName: 'geopins',
  })
  .then(() => console.log('DB connected!'))
  .catch((err) => console.error(err))

const server = new ApolloServer({
  cors: {
    origin: '*',
    credentials: true,
  },
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null
    let currentUser = null
    try {
      authToken = req.headers.authorization
      if (authToken) {
        currentUser = await findOrCreateUser(authToken)
      }
    } catch (err) {
      console.error(`Unable to authenticate user with token ${authToken}`)
    }
    return { currentUser }
  },
})

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`Server is listening on ${url}`))
