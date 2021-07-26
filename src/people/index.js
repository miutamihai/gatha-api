import {firstValueFrom} from 'rxjs'
import {toArray} from 'rxjs/operators'

import {readQuery} from 'core/read-query'
import {runQuery} from 'core/run-query'

export const resolver = ({input}) => firstValueFrom(readQuery('people').pipe(runQuery(input)).pipe(toArray()))
