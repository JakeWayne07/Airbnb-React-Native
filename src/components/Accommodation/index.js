import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles.js'

const Accommodation = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
                source={{uri: 'https://d.newsweek.com/en/full/1574816/bleach-20th-anniversary-anime-return.webp?w=790&f=c3fd9d13d51d91967508e2d1022e9573'}}
                style={styles.image}
            />
            {/* Bed and Bedroom  */}
            <Text style={styles.bed}>1 Bed 1 Bedroom</Text>
            {/* Description  */}
            <Text style={styles.description} numberOfLines={3}>
                <Text style={styles.room}>Full Apartment </Text>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            </Text>
            {/* Old Price and New Price  */}
            <Text style={styles.price}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.newPrice}>&nbsp;$30</Text>
                / Night
            </Text>
            {/* Total Price  */}
            <Text style={styles.totalPrice}>$200 Total</Text>
        </View>
    )
}

export default Accommodation
