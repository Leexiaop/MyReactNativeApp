import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, TabNavigator, createStackNavigator, StackActions, NavigationActions, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Me from '../pages/Me'
import Message from '../pages/Message'
import Story from '../pages/Story'
import Order from '../pages/Order'
import Search from '../pages/Search'
import BackButton from '../components/BackButton'
import ShareButton from '../components/ShareButton'
import Details from '../pages/Details'
const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    // navigationOptions: (navigation) => {
    //   return {
    //     title: 'Search',
    //     headerTintColor: 'red',
    //     headerRight: <ShareButton />,
    //     headerLeft: <BackButton navigation = { navigation } />
    //   }
    // }
  },
  Details: {
    screen: Details,
    navigationOptions: (navigation) => {
      return {
        title: '详情',
      }
    }
  }
})
SearchStackNavigator.navigationOptions = ({navigation}) => {
  if (navigation.state.routes.length > 1) {
    return {
      tabBarVisible: false
    }
  }
}
const StoryStackNavigator = createStackNavigator({
  Story: {
    screen: Story,
    // navigationOptions: (navigation) => {
    //   return {
    //     title: 'Story',
    //     headerTintColor: 'red',
    //     headerRight: <ShareButton />,
    //     headerLeft: <BackButton navigation = { navigation } />
    //   }
    // }
  }
})
const MeStackNavigator = createStackNavigator({
  Me: {
    screen: Me,
    // navigationOptions: (navigation) => {
    //   return {
    //     title: 'Me',
    //     headerTintColor: 'red',
    //     headerRight: <ShareButton />,
    //     headerLeft: <BackButton navigation = { navigation } />
    //   }
    // }
  }
})
const MessageStackNavigator = createStackNavigator({
  Message: {
    screen: Message,
    // navigationOptions: (navigation) => {
    //   return {
    //     title: 'Message',
    //     headerTintColor: 'red',
    //     headerRight: <ShareButton />,
    //     headerLeft: <BackButton navigation = { navigation } />
    //   }
    // }
  }
})
const OrderStackNavigator = createStackNavigator({
  Order: {
    screen: Order,
    // navigationOptions: (navigation) => {
    //   return {
    //     // title: 'Order',
    //     headerTintColor: 'red',
    //     headerRight: <ShareButton />,
    //     headerLeft: <BackButton navigation = { navigation } />
    //   }
    // }
  }
})
export default createAppContainer(createBottomTabNavigator(
  {
    Me: { 
      screen: MeStackNavigator
    },
    Story: {
      screen: StoryStackNavigator
    },
    Order: {
      screen: OrderStackNavigator
    },
    Message: {
      screen: MessageStackNavigator
    },
    Search: {
      screen: SearchStackNavigator
    }
  },
  {
    /* Other configuration remains unchanged */
    initialRouteName: 'Search'
  }
));