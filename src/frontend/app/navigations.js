import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Import Home Screen
import HomeScreen from './screens/home/HomeScreen';

// Import Tracking Screen
import TrackingListScreen from './screens/tracking/TrackingListScreen';
import TrackingAddScreen from './screens/tracking/TrackingAddScreen';

// Import Courier Screen
import CourierListScreen from './screens/courier/CourierListScreen';

// Import Setting Screen
import SettingScreen from './screens/setting/SettingScreen';


const MainNavigator = createBottomTabNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) =>
        <Icon name='ios-home-outline' type='ionicon' size={25} color={tintColor} />
    }
  },
  tracking: {
    screen: TrackingListScreen,
    navigationOptions: {
        tabBarLabel: 'Tracking',
        tabBarIcon: ({tintColor}) =>
        <Icon name='ios-eye-outline' type='ionicon' size={25} color={tintColor} />
    }
  },
  newtracking: {
    screen: TrackingAddScreen,
    navigationOptions: {
        tabBarLabel: 'Scan',
        tabBarIcon: ({tintColor}) =>
        <Icon name='ios-add-circle' type='ionicon' size={25} color={tintColor} />
    }
  },
  courier: {
    screen: CourierListScreen,
    navigationOptions: {
        tabBarLabel: 'Couriers',
        tabBarIcon: ({tintColor}) =>
        <Icon name='ios-send-outline' type='ionicon' size={25} color={tintColor} />
    }
  },
  setting: {
    screen: SettingScreen,
    navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor}) =>
        <Icon name='ios-settings-outline' type='ionicon' size={25} color={tintColor} />
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}
