import React from 'react'
import { 
    View, 
    Text, 
    ImageBackground, 
    Pressable 
} from 'react-native'
import styles from './styles'

import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = (props) => {
    return (
        <View>
            {/* Search Button */}
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn('explore pressed')}
            >
                <Fontisto name={'search'} size={20} color={'pink'}/>
                <Text style={styles.searchButtonText}>
                    Where are you Going?
                </Text>
            </Pressable>

            <ImageBackground 
                source={require('../../assets/images/wallpaper.jpg')}
                style={styles.image}>
                {/* Image Text */}
                <Text style={styles.text}>Go Near</Text>

                {/* Image Button */}
                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('explore pressed')}
                >
                    <Text style={styles.buttonText}>
                        Explore Nearby Places
                    </Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen
