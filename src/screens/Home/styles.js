import {StyleSheet, Dimensions} from 'react-native'

const styles  = StyleSheet.create({
    image : {
        width: '100%',
        height: 500,
        resizeMode: 'contain',
        justifyContent: 'center',
    },

    text : {
        color: 'white',
        fontWeight: '700',
        fontSize: 80,
        width: '70%',
        padding: 20
    },

    button : {
        marginStart: 20,
        backgroundColor: 'white',
        padding: 5,
        width: 200,
        borderRadius: 5,
        alignItems: 'center',
    },

    buttonText : {
        fontWeight: '700'
    },

    searchButton : {
        alignItems: 'center',
        zIndex: 100,
        position: 'absolute',
        top: 20,
        width: Dimensions.get('screen').width - 20,
        flexDirection: 'row',
        justifyContent: 'center',
        elevation: (Platform.OS === 'android') ? 50 : 0,
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 20,
        marginHorizontal: 10
    },

    searchButtonText : {
        fontWeight : '700',
        paddingStart: 10
    }
})

export default styles
