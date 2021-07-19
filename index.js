const express = require('express')
const {graphqlHTTP} = require('express-graphql')

const schema = require('./schema')
const rootResolver = require('./root-resolver')
const app = express()

app.use('/graphql', graphqlHTTP({
	schema,
	rootValue: rootResolver,
	graphiql: true
}))

app.listen(3000, () => {
	console.log('Listening on port 3000')
})

