import {pipe} from 'rxjs'
import {map} from 'rxjs/operators'
import {Neo4jGraphQL} from '@neo4j/graphql'

import {getDriver} from 'core/get-driver'

export const makeSchema = () => pipe(
    map(schema => new Neo4jGraphQL({typeDefs: schema, driver: getDriver()}))
)
