import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles.js'

const AccommodationDetails = (props) => {

    const post = props.post

    return (
        <ScrollView style={styles.container}>
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
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

            <Text style={styles.longDescription}>
                {post.longDescription}
            </Text>
        </ScrollView>
    )
}

export default AccommodationDetails;
