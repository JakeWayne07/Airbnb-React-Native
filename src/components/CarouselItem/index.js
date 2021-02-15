import React from 'react'
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import styles from './styles.js'
import { useNavigation } from "@react-navigation/native";

const CarouselItem = (props) => {

    const post = props.post
    const width = useWindowDimensions().width
    const navigation = useNavigation()

    return (
        <Pressable style={[styles.container, {width: width - 60}]}
            onPress={ () =>{
                navigation.navigate("Accommodation Details", {postId: post.id})
            }}
        >
            <View>
                {/* Image */}
                <Image
                    source={{uri: post.image}}
                    style={styles.image}
                />
            </View>
            <View style={{marginStart: 10, flex: 1}}>
                {/* Bed and Bedroom  */}
                <Text style={styles.bed}>{post.bed} Bed {post.bedroom} Bedroom</Text>
                {/* Description  */}
                <Text style={styles.description} numberOfLines={2}>
                    <Text>{post.type} </Text>
                    {post.title}
                </Text>
                {/* Old Price and New Price  */}
                <Text style={styles.price}>
                    <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                    <Text style={styles.newPrice}>&nbsp;${post.newPrice}</Text>
                    / Night
                </Text>
            </View>
            
        </Pressable>
    )
}

export default CarouselItem;
