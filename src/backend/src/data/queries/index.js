import {GraphQLObjectType} from 'graphql';
import dish from './dish';
import tracking from './tracking'

export default new GraphQLObjectType({
    name: 'Query',
    description: 'root query',
    fields: {
        dish,
        tracking,
    }
})