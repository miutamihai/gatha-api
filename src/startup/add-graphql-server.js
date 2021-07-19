import {pipe} from 'rxjs'
import {tap} from 'rxjs/operators'
import {graphqlHTTP} from 'express-graphql'

import {buildGraphqlConfig} from 'startup/build-graphql-config'

export const addGraphqlServer = () => pipe(
    tap(app => app.use('/graphql', graphqlHTTP(buildGraphqlConfig()))),
)
