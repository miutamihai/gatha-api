import {buildGraphqlConfig} from 'startup/build-graphql-config'
import {createServer} from 'startup/create-server'
import {listen} from 'startup/listen'

buildGraphqlConfig()
    .pipe(createServer())
    .pipe(listen())
    .subscribe()
