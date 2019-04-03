import {dish as DishModel} from '../models'
import {dish as DishType} from '../type';

const dishField = {
    type: DishType,
    resolve(source, args, context, info) {
        console.log('source',source);
        console.log('args',args);
        console.log('context',context);
        console.log('info',info);
        return DishModel(context).get();
    }
};

export default dishField;