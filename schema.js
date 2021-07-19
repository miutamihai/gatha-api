const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type Query {
        hello: string
    }
`)

module.exports = schema
