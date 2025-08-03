import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Detail = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Movie Details: {id}</Text>
        </View >
    )
}

export default Detail

const styles = StyleSheet.create({})