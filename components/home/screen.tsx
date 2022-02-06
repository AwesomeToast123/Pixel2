import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, FlatList } from 'react-native';
import { Avatar } from 'react-native-paper';
import Hotpics from '../../components/home/index';
import 'react-native-gesture-handler';
import { BottomTabNavigator } from '../../navigation';


//Screen for Home 
//Moved it as a component for navigation reasons
//Wtf did I just do?

const HScreen = () => {

    const [userName, setuserName] = useState('');


    const [images, setImages] = useState([{
        id: '1',
        image: 'link'
    }, {
        id: '2',
        image: 'link'
    }, {
        id: '3',
        image: 'link'
    }]);

    return (
        <View style={styles.container}>
            <View style={styles.containerContent}>
                <View style={styles.header}>
                    <Pressable style={{ marginRight: 20 }}>
                        <Avatar.Image
                            size={50}
                            source={{ uri: 'https://www.clipartmax.com/png/middle/263-2634362_a-great-place-to-find-pixel-art-templates-minecraft-flappy-bird-bird.png' }}
                        />
                    </Pressable>
                    <Text style={styles.welcome}>Welcome {userName}</Text>
                </View>

                <ScrollView style={styles.card}>
                    <Text style={styles.textCard}>Here are some Hot Pix Today</Text>
                    <FlatList
                        data={images}
                        renderItem={({ item, index }) => (
                            <Hotpics picHome={item} />
                        )}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default HScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    containerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textCard: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },

    image: {
        borderRadius: 20,
        backgroundColor: "#cacccb",
        width: 300,
        height: 150,
        alignItems: "center",
        marginTop: 20
    },

    welcome: {
        fontSize: 40
    },

    card: {
        backgroundColor: "#F8F2F2",
        marginTop: 20,
        borderRadius: 20,
        width: 500
    },
    pressImage: {
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20
    },
    header: {
        flexDirection: "row",
        marginRight: 20,
        justifyContent: "space-between"
    }
})