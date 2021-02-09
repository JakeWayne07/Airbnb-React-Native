import React from 'react';
import { View} from 'react-native'
import styles from './styles'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const MapScreen = () => {
    return(
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{latitude: 37.78825, longitude: -122.4324}}
                />
            </MapView>
        </View>
    )
}

export default MapScreen;