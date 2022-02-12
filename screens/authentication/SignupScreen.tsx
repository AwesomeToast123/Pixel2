import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = () => {
    const SIGNUP_MUTATION = gql`
        mutation SignupMutation( $email: String!, $password: String!){
         signUp(input: {email: $email, password: $password}){
                token
                  user{
                    id
                    name
                    email
                  }
             }
        }
    `

    const startValue = new Animated.Value(1);
    const endValue = 1.5;

    const Stack = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfpassword] = useState('');

    const [signUp, { data, error, loading }] = useMutation(SIGNUP_MUTATION);

    useEffect(() => {
        Animated.loop(
            Animated.spring(startValue, {
                toValue: endValue,  //50 pixels from top to bottom
                friction: 1, //less the friction  
                tension: 20, //speed of the object
                useNativeDriver: true
            }),
            { iterations: 4 }
        ).start();
    }, [startValue, endValue])

    //for the animation to translate to the view 
    const bounce = {
        transform: [
            { translateY: startValue },
        ]
    }

    if (data) {
        AsyncStorage.setItem('token', data.signUp.token)
            .then(() => {
                Stack.navigate('HomeScreen')
            })
    }

    const onSubmit = () => {
        signUp({ variables: { email, password } })

        Stack.navigate("HomeScreen");
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.registerText}>Sign up</Text>
                <Animated.View style={[styles.image, bounce]}>
                    <Image
                        source={{ uri: 'https://images.crazygames.com/colorpixelartclassic.png?auto=format,compress&q=75&cs=strip' }}
                        style={styles.image}
                    />
                </Animated.View>
            </View>

            <Text style={styles.randomQuote}>Its free!</Text>
            <View>
                <Text>Email</Text>
                <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.textInput}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <Text>Confirm Password</Text>
                <TextInput
                    style={styles.textInput}
                    value={confPassword}
                    onChangeText={setConfpassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={styles.beginJourney}
                    onPress={onSubmit}
                >
                    Begin Your Journey
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    textForm: {
        fontSize: 15,
        marginBottom: 10
    },

    registerText: {
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

    beginJourney: {
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
})
