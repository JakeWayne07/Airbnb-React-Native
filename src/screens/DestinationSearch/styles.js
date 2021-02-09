import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 20
    },

    textInput : {
        fontSize: 20,
        marginBottom: 20,
        marginTop: 50
    },

    row : {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#5b5b5b',
        borderBottomWidth: .5,
        padding: 16
    },

    iconContainer : {
        backgroundColor: '#cdcdcd',
        borderRadius: 5,
        padding: 5,
        marginEnd: 10
    },

    locationText : {
        fontSize: 16,
    },

    placeIcon:{
        height: 25,
        width: 25
    }
})

export default styles;
