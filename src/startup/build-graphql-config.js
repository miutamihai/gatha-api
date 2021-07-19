const schema = require('./schema')
const rootResolver = require('./root-resolver')

const buildGraphqlConfig = () => ({
    schema,
    rootValue: rootResolver,
    graphiql: true
})

module.exports = buildGraphqlConfig
