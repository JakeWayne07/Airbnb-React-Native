import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    }
})

export default styles;
