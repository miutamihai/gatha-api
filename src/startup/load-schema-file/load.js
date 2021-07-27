import {from, mergeMap, pipe} from 'rxjs'
import {loadSchema} from 'graphql-tools'

export const load = () => pipe(
    mergeMap(parameters => from(loadSchema(...parameters)))
)
