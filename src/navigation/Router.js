import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DestinationSearchScreen from '../screens/DestinationSearch'
import GuestScreen from '../screens/Guests'
import MainTabNavigator from './MainTabNavigator'
import AccommodationScreen from '../screens/AccommodationScreen'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={MainTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearchScreen}
                    options={{
                        title: "Search your Destination"
                    }}
                />
                
                <Stack.Screen
                    name={"Guest Search"}
                    component={GuestScreen}
                    options={{
                        title: "How many people?"
                    }}
                />
                <Stack.Screen
                    name={"Accommodation Details"}
                    component={AccommodationScreen}
                    options={{
                        title: "The place details"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
