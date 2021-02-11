import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        margin : 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

elevation: 3,
    },

    image : {
        width: 100,
        aspectRatio: 1 / 1,
    },

    bed : {
        color : '#CDCDCD',
        fontSize: 14,
    },

    description : {
        fontSize: 16,
    },

    price : {
        fontSize: 18,
        marginTop: 4
    },

    oldPrice : {
        color: '#5b5b5b',
        fontWeight: '700',
        textDecorationLine: 'line-through'
    },

    newPrice :{
        fontWeight: '700'
    }
})

export default styles;
