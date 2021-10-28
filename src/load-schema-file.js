import {of} from 'rxjs'

import schema from 'schema.graphql'

export const loadSchemaFile = () => of(schema)
