import {GraphQLError} from 'graphql';
import {tracking as TrackingType, StateEnumType } from '../type';

export default function (ctx) {
    const {client} = ctx;
    console.log('ctx',ctx);

    function set(v) {
        console.log('set',v);
        return { barcode: '5555' , courier_id: 3, result_code: 0, result_message: 'arrived auckland',courier_name:"sdsd",current_status:'ok'};
    }

    function get() {
        console.log('get');
        return  { barcode: '33333333' , courier_id: 2, result_code: 0, result_message: 'arrived auckland',courier_name:"nzpost",current_status:'ok'};
    }

    return {
        get,
        set
    }
}

