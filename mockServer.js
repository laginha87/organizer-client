var buildClientSchema = require("graphql").buildClientSchema;
var introspectionResult = require("./schema.json");
var ApolloServer = require("apollo-server").ApolloServer;
var spawn = require('child_process').spawn

var schema = buildClientSchema(introspectionResult);

var server = new ApolloServer({
  schema: schema,
  mocks: true,
});

server.listen({ port: 4444 }).then((args) => {
  console.log("🚀 Server ready at " + args.url);
});

var opts = {
  env: process.env,
  cwd: process.cwd(),
  stdio: ['inherit', process.stdout, process.stdout]
}

opts.env.NDOE_ENV = 'test'
spawn('yarn', ['parcel', 'src/index.html', '-p', 1235 ], opts)
