//Koa
import * as Koa  from 'koa';
import * as koaBody from 'koa-bodyparser';
import * as cors from '@koa/cors'
//Apollo Imports
import { importSchema } from 'graphql-import'
import { ApolloServer} from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer, ConnectionContext } from 'subscriptions-transport-ws';
//Prisma
import { prisma } from './generated/prisma-client'
//App
import * as s2s from 'graphql-s2s';
import resolvers from './resolvers'


const PORT = 3000;
const typeDefs = importSchema("src/schema.graphql")
const schema = makeExecutableSchema({typeDefs: [s2s.graphqls2s.transpileSchema(typeDefs)],resolvers})
//init
const app = new Koa();

app.use(koaBody())

app.use(cors())
const apollo = new ApolloServer({
  
  schema,
  context: ({ ctx }) => ({
    request: ctx.request,
    prisma
  }),
  playground: {
    subscriptionEndpoint: `ws://localhost:${PORT}/subscriptions`
  },
  debug: false
})

apollo.applyMiddleware({ app });

const server = app.listen({ port: PORT }, () =>
  {
    console.log(`Server ready at http://localhost:${PORT}${apollo.graphqlPath}`)
    console.log(`Subscriptions ready at ws://localhost:${PORT}${apollo.subscriptionsPath}`)
  }
);


new SubscriptionServer({
  execute,
  subscribe,
  schema,
  onConnect: (webSocket: WebSocket, context: ConnectionContext) => {
    return { prisma: prisma }
  },

}, {
  server,
  path: '/subscriptions',
})







