const { Prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/Mutations");
const Query = require("./resolvers/Query");
require("dotenv").config();

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET
  // debug: true
});

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Mutation,
    Query
  },
  context: req => ({
    ...req,
    db
  })
});

server.start(({ port }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
