import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, useWindowDimensions} from 'react-native'
import styles from './styles'
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from "../../components/CustomMarker";
import places from '../../assets/data/feed';
import CarouselItem from '../../components/CarouselItem';

const MapScreen = () => {

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
        if(!selectedPlaceId || !flatlist){
            return
        }

        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})

        const selectedPlace = places[index]
        const region = {
            latitude : selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
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
                region={{
                    latitude: 28.2723,
                    longitude: -16.6425,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {places.map(place =>(
                            <CustomMarker
                                coordinate={place.coordinate}
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
                    data={places}
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