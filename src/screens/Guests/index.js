import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const GuestScreen = () => {

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View>
                {/* Adult Row */}
                <View style={styles.row}>
                    {/* Row Name */}
                    <View style={styles.title}>
                        <Text style={{fontWeight: '700'}}>Adults</Text>
                        <Text style={{color: '#b8b8b8'}}>13 years up and up</Text>
                    </View>
                    {/* Buttons */}
                    <View style={styles.buttons}>
                        {/* - */}
                        <Pressable
                            style={styles.numButton}
                            onPress={() => setAdults(Math.max(0,adults - 1))}
                        >
                            <Text style={{fontSize: 20, color: '#b8b8b8'}}>-</Text>
                        </Pressable>
                        {/* value */}
                        <Text style={styles.number}>{adults}</Text>
                        {/* + */}
                        <Pressable
                            style={styles.numButton}
                            onPress={() => setAdults(adults + 1)}
                        >
                            <Text style={{fontSize: 20, color: '#b8b8b8'}}>+</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Children Row */}
                <View style={styles.row}>
                    {/* Row Name */}
                    <View style={styles.title}>
                        <Text style={{fontWeight: '700'}}>Children</Text>
                        <Text style={{color: '#b8b8b8'}}>3 to 12</Text>
                    </View>
                    {/* Buttons */}
                    <View style={styles.buttons}>
                        {/* - */}
                        <Pressable
                            style={styles.numButton}
                            onPress={() => setChildren(Math.max(0,children - 1))}
                        >
                            <Text style={{fontSize: 20, color: '#b8b8b8'}}>-</Text>
                        </Pressable>
                        {/* value */}
                        <Text style={styles.number}>{children}</Text>
                        {/* + */}
                        <Pressable
                            style={styles.numButton}
                            onPress={() => setChildren(children + 1)}
                        >
                            <Text style={{fontSize: 20, color: '#b8b8b8'}}>+</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Infant Row */}
                <View style={styles.row}>
                    {/* Row Name */}
                    <View style={styles.title}>
                        <Text style={{fontWeight: '700'}}>Infants</Text>
                        <Text style={{color: '#b8b8b8'}}>0 to 1</Text>
                    </View>
                    {/* Buttons */}
                    <View style={styles.buttons}>
                        {/* - */}
                        <Pressable
                            style={styles.numButton}
                            onPress={() => setInfants(Math.max(0,infants - 1))}
                        >
                            <Text style={{fontSize: 20, color: '#b8b8b8'}}>-</Text>
                        </Pressable>
                        {/* value */}
                        <Text style={styles.number}>{infants}</Text>
                        {/* + */}
                        <Pressable
                            style={styles.numButton}
                            onPress={() => setInfants(infants + 1)}
                        >
                            <Text style={{fontSize: 20, color: '#b8b8b8'}}>+</Text>
                        </Pressable>
                    </View>
                </View>  
            </View>

            {/* Search Button */}
            <Pressable 
                onPress={() => 
                    navigation.navigate('Home', {
                        screen: 'Explorer',
                        params: {
                            screen: 'SearchResult'
                        }
                    })
                } 
                style={styles.searchButton}
            >
                <Text style={styles.searchButtonText}>
                    Search
                </Text>
            </Pressable>
        </View>
    )
}

export default GuestScreen;
