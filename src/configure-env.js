import {pipe} from 'rxjs'
import {tap} from 'rxjs/operators'
import dotenv from 'dotenv'

export const configureEnv = () => pipe(
    tap(() => dotenv.config())
)
