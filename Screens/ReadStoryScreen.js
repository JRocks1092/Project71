import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default class ReadStoryScreen extends Component {
    render() {
        return (
            <View>
                <Text style = { styles.heading }>ReadStoryScreen</Text>
            </View >
        )
    }
}


const styles = StyleSheet.create({

    touchableOpacity: {

        alignSelf: 'center',
        backgroundColor: "pink",
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 50

    },

    heading: {

        color: "pink",
        alignSelf: "center",
        fontSize: 40,

    },

    textInput: {

        borderWidth: 3,
        borderRadius: 20,
        borderColor:"#99FF99",
        width: 200,
        marginTop: 50,
        alignSelf: "center",
        textAlign: "center",

    },

    bg: {

        flex: 1,
        resizeMode: 'cover'
    },

    text: {

        color: "#000000",
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'
    }
})
