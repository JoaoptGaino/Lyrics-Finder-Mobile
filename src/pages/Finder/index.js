import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import Constants from "expo-constants";
import { Feather as Icon } from '@expo/vector-icons';
import axios from 'axios';
import { StyleSheet, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform, TextInput,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Finder() {
    const [name,setName] = useState('');
    const [song,setSong] = useState('');
    const [lyrics,setLyrics] = useState('');
    const navigation = useNavigation();
    function findLyrics(title, artist) {
        return axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    }
    function navigateToHome() {
        navigation.navigate('Home');
    }
    /* const handleArtist = text =>{
        setArtist(text.target.value);
    }
    const handleSong = text =>{
        setSong(text.target.value);
    } */
    async function handleSubmit(){
        try{
            const lyricsResponse = await findLyrics(song,name);
            const data = await lyricsResponse.data.lyrics;
            
            if(data){
                console.log(data);
                setLyrics(data);
            }else{
                console.log("Erro porra");
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
                <TouchableOpacity onPress={navigateToHome}>
                    <Icon name="arrow-left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Finder screen</Text>
                <View style={styles.main}>
                    <Text style={styles.formTitle}>Artist name</Text>
                    <TextInput
                        style={styles.formControl}
                        onChangeText={e => setName(e)}
                        placeholder="Megadeth"
                    />
                    <Text style={styles.formTitle}>Song name</Text>
                    <TextInput
                        style={styles.formControl}
                        onChangeText={e => setSong(e)}
                        placeholder="She-wolf"
                    />
                    <Button style={styles.submitButton} title="Find out" onPress={handleSubmit}/>
                </View>
                <View style={styles.lyrics}>
                    <Text>
                        {lyrics}
                    </Text>
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
        padding: 5,
        color:'black',
        backgroundColor:'darkgray'
    },
    formTitle:{
        fontWeight:'bold',
        textAlign:'center'
    },
    submitButton:{
        backgroundColor:'red',
    },
    lyrics:{
        color:'black'
    }
})