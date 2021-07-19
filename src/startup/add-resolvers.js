import {pipe} from 'rxjs'
import {map} from 'rxjs/operators'

import {rootResolver} from 'startup/root-resolver'

export const addResolvers = () => pipe(
    map(schema => ({schema, rootValue: rootResolver}))
)
