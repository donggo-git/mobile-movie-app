import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const MovieDetail = () => {
    const { id } = useLocalSearchParams();
    return (
        <View className='bg-primary flex-1'>
            <ScrollView contentContainerStyle={{
                paddingBottom: 80
            }}>
                <View>
                    <Image source={{ uri: `https://image.tmbd.org/t/p/w500${movie ? poster_path}` }} />
                </View>
            </ScrollView>
        </View >
    )
}

export default MovieDetail

const styles = StyleSheet.create({})