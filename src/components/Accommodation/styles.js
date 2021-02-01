import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        margin : 10,
        marginVertical: 20
    },

    image : {
        width: '100%',
        aspectRatio: 3 / 2,
        borderRadius : 10
    },

    bed : {
        paddingTop: 10,
        color : '#CDCDCD',
        fontSize: 14,
        fontWeight: '700'
    },

    description : {
        fontSize: 18,
        textAlign: 'justify',
        lineHeight: 24
    },

    room : {
        fontWeight: '700'
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
    },

    totalPrice : {
        fontSize: 14,
        color: '#5b5b5b',
        textDecorationLine: 'underline',
        marginTop: 4
    }
})

export default styles;
