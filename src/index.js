import {configureApp} from 'startup/configure-app'
import {addGraphqlServer} from 'startup/add-graphql-server'
import {listen} from 'startup/listen'

configureApp()
    .pipe(addGraphqlServer())
    .pipe(listen())
    .subscribe()
