import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResultScreen from '../screens/SearchResult'
import MapScreen from '../screens/Map';
import { useRoute } from '@react-navigation/native'

const SearchResultsTabNavigator = () => {
    const route = useRoute()

    const Tab = createMaterialTopTabNavigator()

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle:{
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name={'list'}>
                {() => <SearchResultScreen guests={route.params.guests}/>}
            </Tab.Screen>
            <Tab.Screen name={'map'}>
                {() => <MapScreen guests={route.params.guests}/>}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator;
