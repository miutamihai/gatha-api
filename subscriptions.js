// @ts-check
const { createServer } = require("http");
const express = require("express");
const { execute, subscribe } = require("graphql");
const { ApolloServer, gql } = require("apollo-server-express");
const { PubSub } = require("graphql-subscriptions");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");


(async () => {
	const PORT = 4001;
	const pubsub = new PubSub();
	const app = express();
	const httpServer = createServer(app);

	const user = {
		firstName: "Mihai",
		lastName: "Miuta",
		email: "miuta.mihai@gmail.com",
		phone: "0728 423 332"
	}

	// Schema definition
	const typeDefs = gql`
		type User {
			firstName: String
			lastName: String
		}
		
        type Query {
            currentNumber: Int
        }

        type Subscription {
	        created: User
        }
	`;

	// Resolver map
	const resolvers = {
		Query: {
			currentNumber() {
				return currentNumber;
			},
		},
		Subscription: {
			created: {
				subscribe: () => pubsub.asyncIterator(["CREATED"]),
			},
		},
	};

	const schema = makeExecutableSchema({ typeDefs, resolvers });

	const server = new ApolloServer({
		schema,
	});
	await server.start();
	server.applyMiddleware({ app });

	SubscriptionServer.create(
		{ schema, execute, subscribe },
		{ server: httpServer, path: server.graphqlPath }
	);

	httpServer.listen(PORT, () => {
		console.log(
			`🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`
		);
		console.log(
			`🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`
		);
	});

	let currentNumber = 0;
	function incrementNumber() {
		currentNumber++;
		pubsub.publish("CREATED", { created: user });
		setTimeout(incrementNumber, 4000);
	}
	// Start incrementing
	incrementNumber();
})();
