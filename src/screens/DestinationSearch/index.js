import React, {useState} from 'react'
import { View, TextInput, FlatList, Text } from 'react-native'
import styles from './styles'
import searchResults from '../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'

const DestinationSearchScreen = () => {

    const {inputText, setInput} = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInput}
                style={styles.textInput}
            />
            <FlatList
                data={searchResults}
                renderItem={({item}) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={24}/>
                        </View>
                        <Text style={styles.locationText}>
                            {item.description}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen;
