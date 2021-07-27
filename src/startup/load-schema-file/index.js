import {getPath} from 'startup/load-schema-file/get-path'
import {addOptions} from 'startup/load-schema-file/add-options'
import {load} from 'startup/load-schema-file/load'

export const loadSchemaFile = () => getPath()
    .pipe(addOptions())
    .pipe(load())
