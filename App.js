import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './Home';
import ProfileScreen from './Profile';
import DetailsScreen from './Detail';
import Draw from './Draw';

const stack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailsScreen,
  },
  {
    initialRouteName:'Home',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const pstack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Detail: DetailsScreen, 
  }
);

const tab = createBottomTabNavigator(
  {
    Profile: ProfileScreen,
    Home: HomeScreen,
  }
);

/*
const AppContainer = createAppContainer(stack);
*/

/*export default class App extends React.Component{

  render() {
    return(
        <AppContainer />
    );
  }
}
*/

export default createAppContainer (createDrawerNavigator(
  {
    Home: stack,
    Profile: pstack,
    Home: tab,
  },
  {
 
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));