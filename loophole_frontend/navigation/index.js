import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import  Chat from '../screens/Chat';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import Profile1 from '../screens/Profile1';
import GettingStarted from '../screens/GettingStarted';
import Spanish from '../screens/Spanish';
import English from '../screens/English';
import French from '../screens/French';
import Profile2 from '../screens/Profile2';
import Profile3 from '../screens/Profile3';
import Profile4 from '../screens/Profile4';
import Profile5 from '../screens/Profile5';
import Profile6 from '../screens/Profile6';




import { theme } from '../constants';

const screens = createStackNavigator({
  Welcome,
  Login,
  SignUp,
  Forgot,
  GettingStarted,
  Explore,
  Browse,
  Product,
  Settings,
  Profile1,
  Spanish,
  English,
  French,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
  Chat,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: theme.sizes.base * 4,
      backgroundColor: theme.colors.white, // or 'white
      borderBottomColor: "transparent",
      elevation: 0, // for android
    },
    headerBackImage: <Image source={require('../assets/icons/back.png')} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base * 2,
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    },
  }
});

export default createAppContainer(screens);