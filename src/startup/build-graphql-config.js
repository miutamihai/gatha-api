import {schema} from 'startup/schema'
import {rootResolver} from 'startup/root-resolver'

export const buildGraphqlConfig = () => ({
    schema,
    rootValue: rootResolver,
    graphiql: true
})
