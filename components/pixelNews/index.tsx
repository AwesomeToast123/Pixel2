import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

interface pixelNews {
    news: {
        id: string,
        title: string,
        desc: string
    }
}

const pixelNews = ({ news }) => {
    const Stack = useNavigation();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        setTitle(news.title);
        setDesc(news.desc);
    }, [news]);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.box}
                onPress={() => Stack.navigate("Pixelnewsclicked")}
            >
                <Image
                    style={styles.Image}
                    source={{ uri: 'assets:/AwesomeToast.JPG' }}
                />

                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default pixelNews;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
        borderColor: "#000000",
        borderWidth: 2,
        width: 400,
        height: 200,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginTop: 30,
        alignItems: 'center',
    },
    Image: {
        backgroundColor: "#000000",
        width: 100,
        height: 100,
        marginRight: 30,
        marginLeft: 30
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 40,
        alignItems: 'center'
    },
    desc: {
        fontSize: 20,
        alignItems: 'center',
    }
})
