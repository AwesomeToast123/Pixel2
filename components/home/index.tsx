import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'

interface image {
    picHome: {
        image: string
    }
}

const homeList = ({ picHome }) => {
    const Stack = useNavigation();

    return (
        <Pressable
            style={{ alignItems: "center" }}
            onPress={() => Stack.navigate("PressedImage")}
        >
            <Image
                source={{ uri: 'https://www.clipartmax.com/png/middle/263-2634362_a-great-place-to-find-pixel-art-templates-minecraft-flappy-bird-bird.png' }}
                style={styles.image}
            />
        </Pressable>
    )
}

export default homeList

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#F8F2F2",
        marginTop: 20,
        borderRadius: 20,
        width: 500
    },

    image: {
        borderRadius: 20,
        backgroundColor: "#cacccb",
        width: 300,
        height: 150,
        alignItems: "center",
        marginTop: 20,
    },


})
