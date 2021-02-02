import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        height: '100%',
        justifyContent: "space-between"
    },

    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: .5,
        borderBottomColor: '#cccccc',
        marginHorizontal:20
    },

    title:{

    },

    buttons: {
        flexDirection: 'row',
        color: 'red',
        alignItems: 'center'
    },

    number:{
        marginHorizontal: 20,
    },

    buttonText:{
        fontSize: 30
    },

    numButton: {
        borderWidth: 1,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 15,
        borderColor: '#b8b8b8'
    },

    searchButton:{
        backgroundColor: '#f15454',
        width: Dimensions.get('window').width -20,
        paddingVertical: 20,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center'
    },

    searchButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    }
})

export default styles;
