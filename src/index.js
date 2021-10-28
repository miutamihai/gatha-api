// DO NOT REMOVE THIS IMPORT
import regeneratorRuntime from 'regenerator-runtime'
import { buildGraphqlConfig } from 'build-graphql-config'
import { createServer } from 'create-server'
import { listen } from 'listen'

buildGraphqlConfig()
	.pipe(createServer())
	.pipe(listen())
	.subscribe()
