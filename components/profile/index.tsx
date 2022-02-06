import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


interface images {
    image: {
        link: string
    }
}

const profileList = ({ image }) => {
    const [img, setImage] = useState()

    useEffect(() => {
        setImage(image.link)
    }, [image])

    return (
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/PixelApple.png' }}
                style={styles.image}
            />
        </View>
    )
}

export default profileList

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: "row",
    },

    image: {
        borderRadius: 20,
        width: 200,
        height: 200,
        backgroundColor: "black"
    }
})
