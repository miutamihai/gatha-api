import {pipe, from} from 'rxjs'
import {mergeMap} from 'rxjs/operators'

export const listen = () => pipe(
    mergeMap(app => from(app.listen()))
)
