import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { AppRegistry } from 'react-native';
//import HttpLink from "apollo-link-http";
//import ApolloClient from "apollo-client";
import {HttpLink,ApolloClient,InMemoryCache} from "apollo-boost";
//import { InMemoryCache } from "apollo-cache-inmemory";
import Navigations from './navigations'
//import TRACKING_QUERY from './graphql/queries/tracking';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8081/graphql" }),
  cache: new InMemoryCache()
});
console.log(client.query);
export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigations />
      </ApolloProvider>
    )
  }
}

