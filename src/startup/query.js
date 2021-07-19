import {query as operators} from 'operator/fetching/query'

export const query = `
    type Query {
        ${operators}
    }
`
