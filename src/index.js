import {buildGraphqlConfig} from 'startup/build-graphql-config'
import {configureEnv} from 'startup/configure-env'
import {createServer} from 'startup/create-server'
import {listen} from 'startup/listen'

buildGraphqlConfig()
    .pipe(configureEnv())
    .pipe(createServer())
    .pipe(listen())
    .subscribe()
