import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from "expo-constants";
import { Feather as Icon } from '@expo/vector-icons';
import axios from 'axios';
import { StyleSheet, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform, TextInput,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Finder() {
    const navigation = useNavigation()
    function findLyrics(title, artist) {
        return axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    }
    function navigateToHome() {
        navigation.navigate('Home');
    }
    function handleInputChange() {
        console.log("Hello");
    }
    function handleSubmit(){
        console.log("Button");
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
                <TouchableOpacity onPress={navigateToHome}>
                    <Icon name="arrow-left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Finder screen</Text>
                <View style={styles.main}>
                    <Text>Artist name</Text>
                    <TextInput
                        style={styles.formControl}
                        onChange={handleInputChange}
                        placeholder="Megadeth"
                    />
                    <Text>Song name</Text>
                    <TextInput
                        style={styles.formControl}
                        onChange={handleInputChange}
                        placeholder="She-wolf"
                    />
                    <Button style={styles.submitButton} title="Find out" onPress={handleSubmit}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        marginTop: 50,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24
    },
    formControl: {
        padding: 2,
        color:'darkgray',
    },
    submitButton:{
        backgroundColor:'red',
    }
})