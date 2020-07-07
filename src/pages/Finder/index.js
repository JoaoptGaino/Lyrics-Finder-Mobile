import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';

export default function Finder() {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.title}>Finder screen</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:32,
    },
    main:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        marginTop:50,
    }
})