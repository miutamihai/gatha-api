import {firstValueFrom} from 'rxjs'

import {readQuery} from 'core/read-query'
import {runQuery} from 'core/run-query'

export const resolver = ({input}) => firstValueFrom(readQuery('person').pipe(runQuery(input)))
