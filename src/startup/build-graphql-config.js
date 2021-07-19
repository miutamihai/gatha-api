import {loadSchema} from 'startup/load-schema'
import {addResolvers} from 'startup/add-resolvers'

export const buildGraphqlConfig = () => loadSchema()
    .pipe(addResolvers())
