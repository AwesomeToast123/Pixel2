import { Pressable, StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Avatar } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import Profile from '../../screens/Profile/profile';
import PixelNews from '../../screens/newsScreen/PixelNews';

const Drawer = createDrawerNavigator();
const Stack = useNavigation();

const DrawerComponent = () => {

    const [userName, setuserName] = useState();

    return (
        <View>
            <View style={styles.topNav}>
                <Pressable style={{ marginRight: 20 }}>
                    <Avatar.Image
                        size={50}
                        source={{ uri: 'https://www.clipartmax.com/png/middle/263-2634362_a-great-place-to-find-pixel-art-templates-minecraft-flappy-bird-bird.png' }}
                    />
                </Pressable>
            </View>

            <View>
                <Text>This is a drawer {userName}</Text>
            </View>
            <View>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="HomeScreen">
                        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                        <Drawer.Screen name="Profile" component={Profile} />
                        <Drawer.Screen name="PixelNews" component={PixelNews} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </View>
            <View>
                <Pressable>
                    Log out
                </Pressable>
            </View>
        </View>
    )
}

export default DrawerComponent;

const styles = StyleSheet.create({
    topNav: {
        flexDirection: 'row',
        backgroundColor: "#F8F2F2",
        height: 50,
        width: '100%'
    },
})

