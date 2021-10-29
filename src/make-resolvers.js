import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

export const makeResolvers = () => ({
	Subscription: {
		modified: {
			subscribe() {
				setTimeout(() => {
					pubsub.publish('MODIFIED', {
						modified: {
							firstName: 'Mihai',
							lastName: 'Miuta'
						}
					})
				}, 2000)

				return pubsub.asyncIterator('MODIFIED')
			}
		}
	}
})
