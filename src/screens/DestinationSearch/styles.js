import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 20
    },

    textInput : {
        fontSize: 16,
        marginBottom:10
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
        fontWeight: '700'
    }
})

export default styles;
