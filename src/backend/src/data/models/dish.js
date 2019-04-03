import {GraphQLError} from 'graphql';
export default function (ctx) {
    const {client} = ctx;
    console.log('ctx',ctx);

    function set(v) {
        console.log('set',v);
        return { id: 2 , name: 'tonylei'};
    }

    function get() {
        console.log('get');
        return  { id: 3 , name: 'Sammy'};
    }

    return {
        get,
        set
    }
}