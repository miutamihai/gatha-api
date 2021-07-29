import {pipe} from 'rxjs'
import {map} from 'rxjs/operators'
import {ApolloServer} from 'apollo-server'

export const createServer = () => pipe(
    map(({schema}) => new ApolloServer({schema})),
)
