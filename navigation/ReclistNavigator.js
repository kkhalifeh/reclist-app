import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import CityListScreen from '../screens/CityListScreen'
import MyProfileScreen from '../screens/MyProfileScreen'
import UserListScreen from '../screens/UserListScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Platform } from '@unimodules/core'
import MyMapScreen from '../screens/MyMapScreen'
import MyListScreen from '../screens/MyListScreen'
import { Ionicons } from '@expo/vector-icons';
import ExploreScreen from '../screens/ExploreScreen'
import CreateListScreen from '../screens/CreateListScreen';
import AuthScreen from '../screens/AuthScreen'

const defaultStackOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? 'black' : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : '',
    headerLayoutPreset: 'center'
  }
}
const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  CitySelect: {
    screen: CityListScreen
  },
  UserList: {
    screen: UserListScreen
  }
}, defaultStackOptions)

const ExploreNavigator = createStackNavigator({
  Explore: {
    screen: ExploreScreen
  },
  UserList: {
    screen: UserListScreen
  }
}, defaultStackOptions)

const ProfileNavigator = createStackNavigator({
  MyProfile: {
    screen: MyProfileScreen
  },
  Map: {
    screen: MyMapScreen
  },
  Lists: {
    screen: MyListScreen
  }

}, defaultStackOptions)

const NewListNavigator = createStackNavigator({
  NewList: {
    screen: CreateListScreen
  }
}, defaultStackOptions)

const tabScreenConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  NewList: {
    screen: NewListNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-list-box" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Explore: {
    screen: ExploreNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-globe" size={25} color={tabInfo.tintColor} />;
      }
    }
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-contact" size={25} color={tabInfo.tintColor} />;
      }
    }
  }
};

const ListTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
  shifting: true,
  activeColor: 'white',
  barStyle: { backgroundColor: 'black' }
}

) : createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: 'black',
  }
})

const AuthNavigator = createStackNavigator({
  Auth: AuthScreen
})

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  List: ListTabNavigator
})


export default createAppContainer(ListTabNavigator)
