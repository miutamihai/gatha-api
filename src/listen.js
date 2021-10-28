import {pipe} from 'rxjs'
import {tap} from 'rxjs/operators'
import {printStatus} from 'print-status'

export const listen = () => pipe(
    tap(app => app.listen(process.env.APP_PORT, printStatus))
)
