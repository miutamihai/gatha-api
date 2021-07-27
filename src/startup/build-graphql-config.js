import {loadSchemaFile} from 'startup/load-schema-file'
import {configureEnv} from 'startup/configure-env'
import {makeSchema} from 'startup/make-schema'

export const buildGraphqlConfig = () => loadSchemaFile()
    .pipe(configureEnv())
    .pipe(makeSchema())
