import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native';
import { Avatar } from 'react-native-paper';
import Hotpics from '../../components/home/index';
import PixelNews from '../newsScreen/PixelNews';
import EditProfile from '../Profile/EditProfile';
import BottomNav from '../../components/bottomNav/index';
import 'react-native-gesture-handler';
import DrawerComponent from '../../components/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from '../../navigation';
import { RootStackParamList } from '../../types';
import Profile from '../Profile/profile';
import { BottomTabNavigator } from '../../navigation';

const HomeScreen = () => {
    return (
        <BottomTabNavigator />
    )
}


export default HomeScreen;