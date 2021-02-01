import React, {useState} from 'react'
import { View, TextInput, FlatList, Text, Pressable } from 'react-native'
import styles from './styles'
import searchResults from '../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const DestinationSearchScreen = () => {

    const {inputText, setInput} = useState('')
    const navigation = useNavigation()

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
                    <Pressable onPress={() => navigation.navigate("Guest Search")} 
                    style={styles.row}
                    >
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={24}/>
                        </View>
                        <Text style={styles.locationText}>
                            {item.description}
                        </Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen;
