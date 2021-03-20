import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, useWindowDimensions} from 'react-native'
import styles from './styles'
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import API from '@aws-amplify/api'
import { graphqlOperation } from '@aws-amplify/api-graphql'
import CustomMarker from "../../components/CustomMarker";
import places from '../../assets/data/feed';
import CarouselItem from '../../components/CarouselItem';
import {listPosts} from '../../graphql/queries'

const defaultRegion = {
    latitude: 28.2723,
    longitude: -16.6425,
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
}

const MapScreen = () => {

    const [posts, setPosts] = useState([])

    const fetchPosts = async () =>{
        const posts = await API.graphql(
            graphqlOperation(listPosts)
        )
        return posts
    }

    const [selectedPlaceId, setSelectedPlaceId] = useState(null)
    const width = useWindowDimensions().width

    const flatlist = useRef()
    const map = useRef()

    const viewConfig = useRef({itemVisiblePercentThreshold: 80})
    const onViewChanged = useRef(({viewableItems}) => {
        if(viewableItems.length > 0){
            const viewableSelectedPlace = viewableItems[0].item
            setSelectedPlaceId(viewableSelectedPlace.id)
        }
    })

    useEffect(() => {
        fetchPosts()
            .then(posts => setPosts(posts.data.listPosts.items))
            .catch(e => console.log(e))

        if(!selectedPlaceId || !flatlist){
            return
        }

        const index = posts.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})

        const selectedPlace = posts[index]
        const region = {
            latitude : selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8
        }

        map.current.animateToRegion(region)

    }, [selectedPlaceId])

    return(
        <View style={styles.container}>
            <MapView
                ref={map}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={defaultRegion}
            >
                {posts.map(place =>(
                            <CustomMarker
                                coordinate={{latitude: place.latitude, longitude: place.longitude}}
                                price={place.newPrice}
                                isSelected={place.id === selectedPlaceId}
                                onPress={() => setSelectedPlaceId(place.id)}
                            />
                        )
                    )}
            </MapView>
            <View style={{position: 'absolute', bottom: 10}}>
                <FlatList
                    ref={flatlist}
                    data={posts}
                    renderItem={({item}) => <CarouselItem post={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    )
}

export default MapScreen;