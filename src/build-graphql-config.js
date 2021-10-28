import {loadSchemaFile} from 'load-schema-file'
import {configureEnv} from 'configure-env'
import {makeSchema} from 'make-schema'

export const buildGraphqlConfig = () => loadSchemaFile()
    .pipe(configureEnv())
    .pipe(makeSchema())
