import React, { Component } from 'react';
import { View, Text,AppRegistry  } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { graphql, compose, withApollo } from 'react-apollo';
import TRACKING_QUERY from '../../graphql/queries/tracking';

class HomeScreen extends Component {

  // Initialise States
  state = {
    trackingCode: ''
  }
  // Constructor
  async componentWillMount() {

  }

  _onTrackingButtonPress = () => {
    console.log(this.state.trackingCode*2);
    console.log(this.props.client.query);
    this._getTrackingInfo();
    // Place your GraphQL and Apollo Code here
  }
/*
console.log(client);
client.query({
  query: TRACKING_QUERY,
  context: {
    // example of setting the headers with context per operation
    headers: {
      special: "Special header value"
    }
  },
  variables:{barcode: "episode", courier_id:2 }
});

*/
  _getTrackingInfo = async () => {
    console.log(999999);                                                                  
    const { data: { tracking } } = await this.props.client.query({
      query: TRACKING_QUERY,
      context: {
        // example of setting the headers with context per operation
        headers: {
          special: "tracking get"
        }
      },
      variables:{barcode: "episode", courier_id:2 }
    });
    console.log(tracking);    
    console.log(888888);
  };

  render() {
    return (
      <View style={{paddingTop:50}}>
        <FormLabel>Tracking Code</FormLabel>
        <FormInput onChangeText={(trackingCode) => this.setState({trackingCode})}/>
        <Button
          title='Tracking Now'
          style={styles.button}
          onPress={this._onTrackingButtonPress}
        />
      </View>
    )
  }
}

// Define screen style props
const styles = {
  button: {
    marginTop:10
  }
}

export default withApollo(HomeScreen);
