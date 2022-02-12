import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated, Pressable } from 'react-native';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import SigninButton from '../../components/signIn/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import SignupScreen from './SignupScreen';

function SigninScreen() {

    const startValue = new Animated.Value(1);
    const endValue = 1.5;

    const Stack = useNavigation();


    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        Animated.loop(
            Animated.spring(startValue, {
                toValue: endValue,  //50 pixels from top to bottom
                friction: 1, //less the friction  
                tension: 20, //speed of the object
                useNativeDriver: true
            }),
            { iterations: 1000 }
        ).start();
    }, [startValue, endValue])

    //for the animation to translate to the view
    const bounce = {
        transform: [
            { scale: startValue },
        ]
    }

    return (
        <View style={styles.container} >
            <View style={styles.title}>
                <Text style={styles.pixelPeek}>Pixel Peek</Text>
                <Animated.View
                    style={[styles.image, bounce]}
                >
                    <Image
                        source={{ uri: 'https://images.crazygames.com/colorpixelartclassic.png?auto=format,compress&q=75&cs=strip' }}
                        style={styles.image}
                    />
                </Animated.View>
            </View>
            <View>
                <Text style={styles.randomQuote}>Random Quote Here</Text>
            </View>
            <View>
                <Text style={styles.textForm}>Username/Email</Text>
                <TextInput
                    style={styles.textInput}
                    value={userName}
                    onChangeText={setuserName}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.textForm}>Password</Text>
                <TextInput
                    style={styles.textInput}
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <Pressable
                    style={styles.SigninButton}
                    onPress={() => Stack.navigate('HomeScreen')}
                >
                    Login
                </Pressable>
                <Pressable
                    style={styles.SignupButton}
                    onPress={() => Stack.navigate('SignUpScreen')}
                >
                    Signup
                </Pressable>
            </View>
        </View>
    )
}

export default SigninScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textForm: {
        fontSize: 20,
        marginBottom: 10
    },

    pixelPeek: {
        fontSize: 40,
        textAlign: "center",
    },

    textInput: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginBottom: 10
    },

    image: {
        width: 40,
        height: 60,
        marginLeft: 20,
        bottom: 15
    },
    randomQuote: {
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
        marginBottom: 20
    },
    title: {
        flexDirection: "row",
        marginBottom: 10
    },
    SigninButton: {
        textAlign: "center",
        justifyContent: "center",
        width: 300,
        height: 60,
        color: "white",
        backgroundColor: "#56FB09",
        marginBottom: 20,
        borderRadius: 20,
        fontSize: 30
    },

    SignupButton: {
        textAlign: "center",
        justifyContent: "center",
        width: 300,
        height: 60,
        color: "white",
        backgroundColor: "#56FB09",
        borderRadius: 20,
        fontSize: 30,
    }
})

