const createExpressApp = require('./startup/create-express-app')
const addGraphqlServer = require('./startup/add-graphql-server')
const listen = require('./startup/listen')

createExpressApp()
    .pipe(addGraphqlServer())
    .pipe(listen())
    .subscribe()
