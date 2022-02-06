import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const signIn = () => {

    //const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.SigninButton}>
                Login
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.SignupButton}
            //onPress={() => navigation.navigate('Signupscreen')}
            >
                Signup
            </TouchableOpacity>
        </View>
    )
}

export default signIn;

const styles = StyleSheet.create({

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
        fontSize: 30
    }
})
