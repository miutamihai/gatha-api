import {buildGraphqlConfig} from 'build-graphql-config'
import {createServer} from 'create-server'
import {listen} from 'listen'
import {printStatus} from 'print-status'

buildGraphqlConfig()
    .pipe(createServer())
    .pipe(listen())
    .subscribe(printStatus)
