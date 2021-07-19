import {buildSchema} from 'graphql'

import {type as operatorType} from 'operator/type'
import {query} from 'startup/query'

export const schema = buildSchema(`
    ${operatorType}
    ${query}
`)
