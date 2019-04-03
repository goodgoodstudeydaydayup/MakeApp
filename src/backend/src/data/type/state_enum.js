import {
    GraphQLEnumType,
  } from 'graphql';
  
  const StateEnumType = new GraphQLEnumType({
    name: 'StateEnum',
    /*for the error return <0 , general error ==0 , ok > 0 */
    values: {
      return_ok: {
        value: 1,
      },
      return_error: {
        value: 0,
      },
      return_DB_error: {
        value: -1,
      },
    },
  });
  
  export {
    StateEnumType as default,
  };