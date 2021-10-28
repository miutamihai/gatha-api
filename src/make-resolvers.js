import { makeKafkaSubscription } from 'make-kafka-subscription'

export const makeResolvers = () => ({
	Subscription: {
		modified: {
			subscribe: async (shite) => {
				console.log('resolving modified subscription with', shite)
				const shiteee = await makeKafkaSubscription().subscribe('neo4j', args => {console.log('args are ', args)})

				return shiteee
			}
		}
	}
})
