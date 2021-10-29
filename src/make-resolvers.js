import { makeKafkaSubscription } from 'make-kafka-subscription'

export const makeResolvers = () => ({
	Subscription: {
		modified: {
			subscribe: () => makeKafkaSubscription().asyncIterator('neo4j')
		}
	}
})
