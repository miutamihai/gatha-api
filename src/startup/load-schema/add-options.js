import {pipe} from 'rxjs'
import {map} from 'rxjs/operators'
import {GraphQLFileLoader} from 'graphql-tools'

export const addOptions = () => pipe(
    map(path => [path, {loaders: [new GraphQLFileLoader()]}])
)
