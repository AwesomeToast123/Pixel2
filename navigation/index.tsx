/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SigninScreen from '../screens/authentication/SigninScreen';
import SignupScreen from '../screens/authentication/SignupScreen';
import EditProfile from '../components/EditScreenInfo';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import PressedImage from '../screens/homeScreen/pressedImage';
import Pixelnewsclicked from '../screens/newsScreen/pixelNewsClicked';
import Pixelnews from '../screens/newsScreen/PixelNews';
import Profile from '../screens/Profile/profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HScreen from '../components/home/screen';
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
*/
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const botTab = createBottomTabNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignInScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignUpScreen" component={SignupScreen} />
      <Stack.Screen name="SignInScreen" component={SigninScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PressedImage" component={PressedImage} />
      <Stack.Screen name="Pixelnewsclicked" component={Pixelnewsclicked} />
      <Stack.Screen name="Pixelnews" component={Pixelnews} />
    </Stack.Navigator>
  );
}

function Drawe() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Pixelnews" component={Pixelnews} />
    </Drawer.Navigator>
  )
}
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 * 
 */

export function BottomTabNavigator() {
  return (
    <botTab.Navigator
      screenOptions={{
        headerShown: false
      }}

      initialRouteName="HomeScreen"
    >
      <botTab.Screen name="Pixelnews" component={Pixelnews} />
      <botTab.Screen name="Home" component={HScreen} />
      <botTab.Screen name="Profile" component={Profile} />
    </botTab.Navigator>
  );
}


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

/*
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
*/



