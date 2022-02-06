import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import PixelNews from '../../screens/newsScreen/PixelNews';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import Profile from '../../screens/Profile/profile';
import Navigation from '../../navigation';
import { RootStackParamList } from '../../types';


const Botnav = () => {
    const botTab = createBottomTabNavigator<RootStackParamList>();

    return (
        <View>
            <botTab.Navigator>
                <botTab.Screen name="Pixelnews" component={PixelNews} />
                <botTab.Screen name="HomeScreen" component={HomeScreen} />
                <botTab.Screen name="Profile" component={Profile} />
            </botTab.Navigator>
        </View>
    );
};


export default Botnav;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
    },

    bar: {
        backgroundColor: '#90EE90',
        width: '100%'
    }
});
