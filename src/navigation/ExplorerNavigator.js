import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SearchResultScreen from '../screens/SearchResult'
import HomeScreen from '../screens/Home'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={"SearchResult"}
                component={SearchResultScreen}
            />
        </Stack.Navigator>
    )
}

export default Router;
