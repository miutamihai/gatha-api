import {pipe} from 'rxjs'
import {tap} from 'rxjs/operators'
import {graphqlHTTP} from 'express-graphql'

export const addGraphqlServer = () => pipe(
    tap(([app, config]) => app.use('/graphql', graphqlHTTP(config))),
)
