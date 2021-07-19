const {pipe} = require('rxjs')
const {tap} = require('rxjs/operators')
const {graphqlHTTP} = require('express-graphql')

const buildGraphqlConfig = require('./build-graphql-config')

const addGraphqlServer = () => pipe(
    tap(app => app.use('/graphql', graphqlHTTP(buildGraphqlConfig()))),
)

module.exports = addGraphqlServer
