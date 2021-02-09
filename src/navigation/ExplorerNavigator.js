import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SearchResultScreen from '../screens/SearchResult'
import HomeScreen from '../screens/Home'
import SearchResultsTabNavigator from './SearchResultsTabNavigator'
import MapScreen from '../screens/Map'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Home"}
                component={MapScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={"SearchResult"}
                component={SearchResultsTabNavigator}
            />
        </Stack.Navigator>
    )
}

export default Router;
