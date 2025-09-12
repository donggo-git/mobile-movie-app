import { icons } from '@/constants/icons'
import React from 'react'
import { Image, View } from 'react-native'

const profile = () => {
    return (
        <View className='bg-primary flex-1 px-10'>
            <View className='flex justify-center items-center flex-1 flex-col gap-5'>
                <Image source={icons.person} className='size-10' tintColor="#fff" />
            </View>
        </View>
    )
}

export default profile