var buildClientSchema = require("graphql").buildClientSchema;
var introspectionResult = require("./schema.json");
var ApolloServer = require("apollo-server").ApolloServer;

var schema = buildClientSchema(introspectionResult);

var server = new ApolloServer({
  schema: schema,
  mocks: true,
});

server.listen({ port: 4444 }).then((args) => {
  console.log("🚀 Server ready at " + args.url);
});
