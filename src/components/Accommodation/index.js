import React from 'react'
import { View, Text, Image,Pressable } from 'react-native'
import styles from './styles.js'
import { useNavigation } from '@react-navigation/native'

const Accommodation = (props) => {

    const days = 3
    const post = props.post
    const navigator = useNavigation()

    return (
        <Pressable 
            style={styles.container}
            onPress={() => {
                navigator.navigate("Accommodation Details", {postId : post.id})
            }}
        >
            {/* Image */}
            <Image
                source={{uri: post.image}}
                style={styles.image}
            />
            {/* Bed and Bedroom  */}
            <Text style={styles.bed}>{post.bed} Bed {post.bedroom} Bedroom</Text>
            {/* Description  */}
            <Text style={styles.description} numberOfLines={3}>
                <Text style={styles.room}>{post.type} </Text>
                {post.title}
            </Text>
            {/* Old Price and New Price  */}
            <Text style={styles.price}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}>&nbsp;${post.newPrice}</Text>
                / Night
            </Text>
            {/* Total Price  */}
            <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
        </Pressable>
    )
}

export default Accommodation
