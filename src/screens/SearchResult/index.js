import API from '@aws-amplify/api'
import { graphqlOperation } from '@aws-amplify/api-graphql'
import React, { useEffect, useState } from 'react'
import { View, FlatList,Text } from 'react-native'
import feed from '../../assets/data/feed'
import Accommodation from '../../components/Accommodation'
import {listPosts} from '../../graphql/queries'

const SearchResultScreen = (props) => {

    const {guests} = props
    const [post, setPost] = useState([])

    const fetchPosts = async () =>{
        const posts = await API.graphql(
            graphqlOperation(listPosts, {
                filter:{
                    maxGuests: {
                        ge: guests
                    }
                }
            })
        )
        return posts
    }

    useEffect(() =>{
        fetchPosts()
            .then(posts => setPost(posts.data.listPosts.items))
            .catch(e => console.log(e))
    },[])

    return (
        <View>
            <FlatList
                data={post}
                renderItem={({item}) => <Accommodation post={item} /> }
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default SearchResultScreen;
