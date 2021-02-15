import React from 'react'
import { View, Text } from 'react-native'
import AccommodationDetails from "../../components/AccommodationDetails";
import places from "../../assets/data/feed";
import { useRoute } from "@react-navigation/native";

//const post = places[0]

const AccommodationScreen = (props) => {

    const route = useRoute()

    console.log(route.params)

    const post =  places.find(place => place.id === route.params.postId)

    return (
        <View>
            <AccommodationDetails post={post}/>
        </View>
    )
}

export default AccommodationScreen
