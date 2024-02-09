import React from "react"
import { TouchableOpacity, Image } from "react-native"
import Home from '../img/Home.png'
import { useNavigation } from "@react-navigation/native"


export const HomeBack = () => {
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('Menu')
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image style={{ width: 40, height: 40 }} source={Home} />
        </TouchableOpacity>
    )
}
