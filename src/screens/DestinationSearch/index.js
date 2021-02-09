import React, {useState} from 'react'
import { View, TextInput, FlatList, Text, Pressable } from 'react-native'
import styles from './styles'
import searchResults from '../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlacesInput from 'react-native-places-input';

const DestinationSearchScreen = () => {

    const {inputText, setInput} = useState('')
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={{height: 200}}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'key Here',
                        language: 'en',
                    }}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails={true}
                    styles={{
                      textInputContainer: {
                        backgroundColor: 'grey',
                      },
                      textInput: {
                        height: 38,
                        color: '#5d5d5d',
                        fontSize: 16,
                      },
                      predefinedPlacesDescription: {
                        color: '#1faadb',
                      },
                    }}
                />
            </View>
            

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
