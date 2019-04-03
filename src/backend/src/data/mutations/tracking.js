import {GraphQLNonNull, GraphQLString,GraphQLInt} from 'graphql';
import {tracking as TrackingModel} from '../models'
import {tracking as TrackingType} from '../type';

const trackingField = {
    type: TrackingType,
    args: {
        barcode: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'the barcode number',
        },
        courier_id: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'the courier company ID',
        },
    },
    resolve(source, {barcode,courier_id}, context, info) {
        const tracking = {
            barcode,
            courier_id,
        };
        return TrackingModel(context).set(tracking);
    }
};

export default trackingField;
