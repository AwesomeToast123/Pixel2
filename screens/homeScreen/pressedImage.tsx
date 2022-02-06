import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Avatar } from 'react-native-paper'


const pressedImage = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: 'https://images.crazygames.com/colorpixelartclassic.png?auto=format,compress&q=75&cs=strip' }}
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={styles.titleArt}>Title Art</Text>
                <Text style={styles.artist}>By: Username</Text>
            </View>
            <View style={styles.avatarimage}>
                <Pressable style={styles.rateUp}>
                    <Avatar.Image
                        size={24}
                        source={{ uri: 'https://www.clipartmax.com/png/middle/263-2634362_a-great-place-to-find-pixel-art-templates-minecraft-flappy-bird-bird.png' }}
                    />
                </Pressable>
                <Pressable style={styles.likeButton}>
                    <Avatar.Image
                        size={24}
                        source={{ uri: 'https://www.clipartmax.com/png/middle/263-2634362_a-great-place-to-find-pixel-art-templates-minecraft-flappy-bird-bird.png' }}
                    />
                </Pressable>
                <Pressable style={styles.favoriteButton}>
                    <Avatar.Image
                        size={24}
                        source={{ uri: 'https://www.clipartmax.com/png/middle/263-2634362_a-great-place-to-find-pixel-art-templates-minecraft-flappy-bird-bird.png' }}
                    />
                </Pressable>
            </View>

        </View>
    )
}

export default pressedImage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        borderRadius: 20
    },
    titleArt: {
        fontSize: 20,
        fontWeight: "bold",
    },
    artist: {
        fontSize: 10
    },
    avatarimage: {
        flexDirection: "row",
        padding: 10,
    },
    likeButton: {
        marginLeft: 10,
    },
    favoriteButton: {
        marginLeft: 10,
    },
    rateUp: {
        marginLeft: 10
    }
})
