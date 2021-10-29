import { PubSub } from 'graphql-subscriptions'

export const pubsub = new PubSub()

export const makeResolvers = () => {
	return ({
		Subscription: {
			modified: {
				subscribe: () => pubsub.asyncIterator(['MODIFIED'])
			}
		}
	})
}
