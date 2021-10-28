import {from, mergeMap, pipe} from 'rxjs'
import {map, tap} from 'rxjs/operators'
import {ApolloServer} from 'apollo-server-express'
import {SubscriptionServer} from 'subscriptions-transport-ws'
import {execute, subscribe} from 'graphql'
import {createServer as createHttpServer} from 'http'
import express from 'express'
import cors from 'cors'

let app

let httpServer

let subscriptionServer

let server

const makeSubServerConfig = schema => [
	{ schema, execute, subscribe },
	{ server: httpServer, path: '/graphql' }
]

const makeApolloPlugins = () => [{
	async serverWillStart() {
		return {
			async drainServer() {
				subscriptionServer.close()
			}
		}
	}
}]

export const createServer = () => pipe(
	tap(() => { app = express() }),
	tap(() => { app.use(cors()) }),
	tap(() => {httpServer = createHttpServer(app)}),
	tap(({schema}) => {subscriptionServer = SubscriptionServer.create(...makeSubServerConfig(schema))}),
	tap(({schema}) => {server = new ApolloServer({schema, plugins: makeApolloPlugins()})}),
	mergeMap(() => from(server.start())),
	tap(() => {server.applyMiddleware({ app })}),
	map(() => httpServer)
)
