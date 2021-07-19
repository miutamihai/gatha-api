import {getPath} from 'startup/load-schema/get-path'
import {addOptions} from 'startup/load-schema/add-options'
import {load} from 'startup/load-schema/load'

export const loadSchema = () => getPath()
    .pipe(addOptions())
    .pipe(load())
