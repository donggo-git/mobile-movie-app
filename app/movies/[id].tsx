import { icons } from '@/constants/icons';
import { fetchMovieDetail } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const MovieDetail = () => {
    const { id } = useLocalSearchParams();
    const { data: movie, loading } = useFetch(() => fetchMovieDetail(id as string))
    return (
        <View className='bg-primary flex-1'>
            <ScrollView contentContainerStyle={{
                paddingBottom: 80
            }}>
                <View>
                    <Image source={{
                        uri: movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}` : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                    }} className='w-full h-[550px]' resizeMode='stretch' />
                </View>
                <View className='flex-col items-start justify-center mt-5 px-5'>
                    <Text className='text-white font-bold text-xl'>{movie?.title}</Text>
                    <View className='flex-row items-center gap-x-1 mt-2'>
                        <Text className='text-light-200 text-sm'>{movie?.release_date?.split('-')[0]}</Text>
                        <Text className='text-light-200 text-sm'>{movie?.runtime}m</Text>
                    </View>
                    <View className='flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2'>
                        <Image source={icons.star} className='size-4' />
                        <Text className='text-white font-bold text-sm'>{Math.round(movie?.vote_average ?? 0)}/10</Text>
                        <Text className='text-light-200 text-sm'>{movie?.vote_count} votes</Text>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}

export default MovieDetail

const styles = StyleSheet.create({})