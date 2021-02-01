import React from 'react'
import { View, FlatList,Text } from 'react-native'
import feed from '../../assets/data/feed'
import Accommodation from '../../components/Accommodation'

const SearchResultScreen = () => {
    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({item}) => <Accommodation post={item} /> }
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default SearchResultScreen;
