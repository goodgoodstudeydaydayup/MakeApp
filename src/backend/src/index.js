import koa from 'koa'; // koa@2
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa , graphiqlKoa } from 'apollo-server-koa';
import schema from './data/schema';
//import {client, pubsub} from './data/redis';

const app = new koa();
const router = new koaRouter();
const PORT = 8080;


    
router.post('/graphql', koaBody(), graphqlKoa({ schema: schema//,
//    context: {
   //     client,
     //   pubsub,}
     }));
router.get('/graphql', graphqlKoa({ schema: schema//,
 //   context: {
   //     client,
     //   pubsub,
//    } 
}));

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);