import {pipe, from} from 'rxjs'
import {map, mergeMap} from 'rxjs/operators'

import {getDriver} from 'core/get-driver'

export const runQuery = input => pipe(
    mergeMap(query => from(getDriver().session().run(query, input))),
    mergeMap(result => result.records),
    map(result => result.get(0).properties)
)
