import {createExpressApp} from 'startup/create-express-app'
import {addGraphqlServer} from 'startup/add-graphql-server'
import {listen} from 'startup/listen'

createExpressApp()
    .pipe(addGraphqlServer())
    .pipe(listen())
    .subscribe()
