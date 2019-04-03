import {GraphQLObjectType,} from 'graphql';
import dish from './dish';
import tracking from './tracking'

export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'root mutation',
    fields: {
        updateDish: dish,
        trackingget: tracking
    }
});