import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import ProfileList from '../../components/profile/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const profile = () => {

    const [imageLink, setimagelink] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();


    return (
        <View style={styles.container}>
            <View style={styles.profileBack}>
                <View>
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/PixelApple.png' }}
                />
            </View>
            <View>
                <Text style={styles.textName}>Profile Name</Text>
            </View>
            <View style={styles.ProfileContainer}>
                <View style={styles.pixilierSinceBox}>
                    <Text>Been a Pixilier Since</Text>
                    <Text>{date}</Text>
                </View>
                <View style={styles.descriptionBox}>
                    <Text style={styles.aboutPixel}>About this pixel:</Text>
                    <Text>Blah Blah Blah {description}</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollBox}>
                <Text style={styles.scrollBoxText}>Pixel Arts</Text>
                <FlatList
                    data={imageLink}
                    renderItem={({ item, index }) => (
                        <ProfileList image={item} />
                    )}
                />
            </ScrollView>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileBack: {
        backgroundColor: "#036ffc",
        width: 500,
        height: 200,
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#036ffc"
    },

    textName: {
        color: "black",
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center'
    },

    textDescription: {
        color: "black",
        marginTop: 10,
        borderColor: "black",
        width: 350
    },

    scrollBox: {
        backgroundColor: "#FFFDD0",
        width: 500,
        height: 300,
        borderRadius: 20
    },

    scrollBoxText: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    },

    ProfileContainer: {
        paddingRight: 150
    },

    aboutPixel: {
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'Roboto'
    },

    descriptionBox: {
        marginTop: 15,
        marginBottom: 10,
        textAlign: 'left'
    },

    pixilierSinceBox: {
        marginTop: 10
    },
})
