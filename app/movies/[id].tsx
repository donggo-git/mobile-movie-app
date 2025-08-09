import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MovieDetail = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Movie Details: {id}</Text>
        </View >
    )
}

export default MovieDetail

const styles = StyleSheet.create({})