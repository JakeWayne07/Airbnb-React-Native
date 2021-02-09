import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResultScreen from '../screens/SearchResult'
import MapScreen from '../screens/Map';

const SearchResultsTabNavigator = () => {

    const Tab = createMaterialTopTabNavigator()

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle:{
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name={'list'} component={SearchResultScreen} />
            <Tab.Screen name={'map'} component={MapScreen} />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator;
