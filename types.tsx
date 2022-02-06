/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: undefined;
  Modal: undefined;
  NotFound: undefined;
  EditProfile: undefined;
  SignUpScreen: undefined;
  SignInScreen: undefined;
  HomeScreen: undefined;
  PressedImage: undefined;
  Pixelnewsclicked: undefined;
  Pixelnews: undefined;
  Profile: undefined;
  Home: undefined; //HomeScreen As component
};

/*
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList
>;
*/

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  EditProfile: undefined;
  SignUpScreen: undefined;
  SignInScreen: undefined;
  HomeScreen: undefined;
  Pixelnewsclicked: undefined;
  Pixelnews: undefined;
  Profile: undefined;
};

/*
export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
*/
