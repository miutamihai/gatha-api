import {pipe} from 'rxjs'
import {tap} from 'rxjs/operators'

export const listen = () => pipe(
    tap(([app]) => app.listen(3000, () => console.log('Listening on port 3000')))
)
