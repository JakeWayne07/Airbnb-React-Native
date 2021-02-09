import React, { useState } from 'react';
import { View, Text} from 'react-native'
import styles from './styles'
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from "../../components/CustomMarker";
import places from '../../assets/data/feed';

const MapScreen = () => {

    const [selectedPlace, setSelectedPlace] = useState(null)

    return(
        <View style={styles.container}>
            <MapView
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
                                isSelected={place.id === selectedPlace}
                                onPress={() => setSelectedPlace(place.id)}
                            />
                        )
                    )}
            </MapView>
        </View>
    )
}

export default MapScreen;