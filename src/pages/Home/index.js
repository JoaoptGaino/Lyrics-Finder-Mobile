import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';

export default function Home() {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.title}>Lyrics Finder</Text>
                    <Text style={styles.description}>Lyrics Finder</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:32,
    },
    main:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        color:'black',
        fontSize:32,
        maxWidth:260,
        maxHeight:64
    },
    description:{
        color:'black',
        fontSize:16,
        marginTop:16,
        maxWidth:260,
        lineHeight:24
    }
});
