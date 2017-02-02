import express from 'express';

import Schema from './data/schema';
import Mocks from './data/mocks';
import Resolvers from './data/resolvers';
import Connectors from './data/connectors';

import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';

const GRAPHQL_PORT = 8080;

const graphQLServer = express();

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  allowUndefinedInResolve: false,
  printErrors: true,
});

// *** TEST ONLY ***
addMockFunctionsToSchema({
   schema: executableSchema,
   mocks: Mocks,
   preserveResolvers: false,
});

// `context` must be an object and can't be undefined when using connectors
graphQLServer.use('/data', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {},
  graphiql: true,
  pretty: true,
  schema: Schema,
  mocks: Mocks,
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/data',
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/data`
));
