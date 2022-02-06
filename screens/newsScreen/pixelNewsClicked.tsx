import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'

const image = { uri: '' };

const pixelNewsClicked = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.newsTitleImage}>News Title</Text>
            </ImageBackground>
            <ScrollView style={styles.newsDescView}>
                <Text style={styles.newsDescTitle}>News Title</Text>
                <Text style={styles.newsDesc}>News Desc Blah blah blah asdmkakoadopamdopamfpidnipdsnmfpdanfopadopasndmpoasndopasndpaosndfp</Text>
            </ScrollView>
        </View>
    )
}


export default pixelNewsClicked

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    newsDescView: {
        backgroundColor: "#fff",
        marginTop: 20,
        width: 300,
        height: 100,
        borderColor: "black",
        borderWidth: 2
    },

    newsDesc: {
        marginTop: 20,
        textAlign: "left",
        marginLeft: 10,
        marginRight: 15
    },

    newsDescTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    newsTitleImage: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
        alignItems: 'baseline'
    },
    image: {
        backgroundColor: "black",
        height: "50%",
        width: 300
    }
})
