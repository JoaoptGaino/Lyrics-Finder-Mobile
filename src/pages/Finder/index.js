import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Constants from "expo-constants";
import { Feather as Icon } from '@expo/vector-icons';
import axios from 'axios';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform, TextInput, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';
export default function Finder() {
    //ca-app-pub-5442802499873971/6532374989
    const [name, setName] = useState('');
    const [song, setSong] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [lyricsTitle, setLyricsTitle] = useState('');
    const navigation = useNavigation();
    function findLyrics(title, artist) {
        return axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    }
    function navigateToHome() {
        navigation.navigate('Home');
    }
    function bannerError(e) {
        console.log(e);
    }
    /* const handleArtist = text =>{
        setArtist(text.target.value);
    }
    const handleSong = text =>{
        setSong(text.target.value);
    } */
    async function handleSubmit() {
        const load = 'Searching...';
        setLyrics('');
        setLyricsTitle('');
        setLyrics(load);
        if ((song === '') && (name === '')) {
            const text = 'Please, write the song and artist!';
            setLyricsTitle(text);
        } else if (song === '') {
            const text = 'Please, write the name of the song!';
            setLyricsTitle(text);
        } else if (name === '') {
            const text = 'Please, write the name of the artist!';
            setLyricsTitle(text);
        } else {
            try {

                const lyricsResponse = await findLyrics(song, name);
                const data = await lyricsResponse.data.lyrics;

                if (data) {
                    setLyrics(data);
                    const title = `${song} by ${name}`;
                    setLyricsTitle(title);
                    
                } else {
                    console.log("Not found");
                    setLyrics('Not found');
                    
                }
            } catch (err) {
                //setLyricsTitle("Can't find anything.");
                console.log(err);
            }
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView>
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
                        <RectButton style={styles.submitButton} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Find out</Text>
                        </RectButton>
                    </View>
                    <View style={styles.lyrics}>
                        <Text style={styles.lyricsDetail}>{lyricsTitle}</Text>
                        <Text style={styles.lyricsContent}>
                            {lyrics}
                        </Text>
                    </View>
                </View>

            </ScrollView>
            <AdMobBanner
                bannerSize="banner"
                adUnitID="ca-app-pub-7648437310619207/8440207232"
                setTestDeviceIDAsync="EMULATOR"
                onDidFailToReceiveAdWithError={(err) => bannerError(err)}
            />
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
        fontSize: 24,
        marginBottom: 20,
    },
    formControl: {
        padding: 5,
        color: 'white',
        backgroundColor: 'black'
    },
    formTitle: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    submitButton: {
        backgroundColor: 'gold',
        height: 55,
        flexDirection: 'row',
        width: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
        alignSelf: 'flex-end',
    },
    buttonText: {
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
    },
    lyrics: {
        paddingTop: 50,
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
    },
    lyricsDetail: {
        paddingBottom: 15,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lyricsContent: {
        textAlign: 'center',
        paddingBottom: 10,
    }
})