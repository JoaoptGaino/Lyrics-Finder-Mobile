import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    function handleNavigateToFinder() {
        navigation.navigate('Finder');
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

            <View style={styles.container}>
                <Text style={styles.title}>Lyrics Finder</Text>
                <View style={styles.main}>

                    <Text style={styles.description}>Let's find some lyrics for your songs?</Text>

                    <RectButton style={styles.button} onPress={handleNavigateToFinder}>
                        <Text style={styles.buttonText}>
                            Let's go!
                    </Text>
                    </RectButton>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    title: {
        padding:10,
        color: 'black',
        fontSize: 32,
        maxWidth: 360,
        maxHeight: 64,
        textAlign: 'center',
    },
    description: {
        color: 'black',
        fontSize: 20,
        marginTop: 16,
        maxWidth: 400,
        lineHeight: 24,
        textAlign:'center',
    },
    button: {
        backgroundColor: 'gold',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        fontWeight:'bold',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
    }
});
