import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const changeProfilePic = () => { }

    const changeBackgroundPic = () => { }

    const navigatetoProf = () => { }

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
                <TextInput
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                    style={{
                        color: "black",
                        fontSize: 20,
                        marginTop: 10,
                    }}
                />

                <TextInput
                    placeholder='Describe yourself'
                    value={desc}
                    onChangeText={setDesc}
                    style={{
                        color: "black",
                        marginTop: 10,
                        borderColor: "black",
                        width: 350
                    }}
                    multiline
                    numberOfLines={20}

                />
            </View>
            <View style={styles.button}>


                <TouchableOpacity
                    onPress={changeProfilePic}
                    style={styles.roundButton}
                >
                    Upload Profile Pic
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={changeBackgroundPic}
                    style={styles.roundButton3}
                >
                    Upload background Pic
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    onPress={navigatetoProf}
                    style={styles.roundButton2}
                >
                    Save Changes
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        padding: 20
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#036ffc"
    },
    profileBack: {
        backgroundColor: "#036ffc",
        width: 500,
        height: 200,
        alignItems: 'center'
    },
    roundButton: {
        borderRadius: 10,
        backgroundColor: "#036ffc",
        color: "white",
        padding: 10
    },
    roundButton3: {
        borderRadius: 10,
        backgroundColor: "#036ffc",
        color: "white",
        padding: 10,
        marginLeft: 10
    },
    roundButton2: {
        borderRadius: 10,
        backgroundColor: "#036ffc",
        color: "white",
        width: 300,
        height: 100,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30
    }
});

export default EditProfile;
