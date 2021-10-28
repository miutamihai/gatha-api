import { KafkaPubSub } from 'graphql-kafka-subscriptions'

export const makeKafkaSubscription = () => new KafkaPubSub({
	topic: process.env.KAFKA_TOPIC,
	host: process.env.KAFKA_HOST,
	port: process.env.KAFKA_PORT,
	globalConfig: {
	}
})
