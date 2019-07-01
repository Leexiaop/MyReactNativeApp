import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, TabNavigator, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Me from '../pages/me'
import Message from '../pages/message'
import Story from '../pages/story'
import Order from '../pages/order'
import Search from '../pages/search'

const AppNavigator = createStackNavigator({
  Me: {
    screen: Me,
  },
  Message: {
    screen: Message,
  },
  Story: {
    screen: Story,
  },
  Order: {
    screen: Order,
  },
  Search: {
    screen: Search,
  },
}, {
    initialRouteName: 'Search',
});

export default createAppContainer(AppNavigator);