import  {addMockFunctionsToSchema}  from 'graphql-tools';
import {GraphQLSchema} from 'graphql';
import query from './queries';
import mutation from './mutations';

//import subscription from './subscriptions';



var schema =  new GraphQLSchema({
    query,
    mutation,
 //   subscription,
});

console.log('Got result',schema);

export default schema;