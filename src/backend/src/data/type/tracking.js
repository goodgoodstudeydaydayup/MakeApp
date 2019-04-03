import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import StateEnumType from './state_enum'

export default new GraphQLObjectType({
    name: 'Tracking',
    description: 'a tracking number checking',
    fields: {
        barcode: {
            type: new GraphQLNonNull(GraphQLString),
        },
        courier_id: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        result_code: {
            type: StateEnumType,
        },
        result_message: {
            type: GraphQLString,
        },
        courier_name: {
            type: new GraphQLNonNull(GraphQLString),  
        },
        current_status: {
            type: new GraphQLNonNull(GraphQLString),  
        },
    }
})
