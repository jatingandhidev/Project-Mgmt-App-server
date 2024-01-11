const express = require('express')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const port = process.env.PORT || 5000
const schema = require('./schema/schema.js')
const connectDB = require('./config/db.js')
const color = require('colors')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('APP IS RUNNING')
})

connectDB()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, console.log(`server is running on port ${port}`))
