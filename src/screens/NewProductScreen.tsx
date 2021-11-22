import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { TextInput, Button } from '@react-native-material/core';
import { MaterialCommunityIcons as Icon, Foundation } from "@expo/vector-icons";

const NewProductScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Create New Product</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputTextContainer} label="Name" />
                <TextInput style={styles.inputTextContainer} label="Price" />
                <TextInput style={styles.inputTextContainer} label="Product Type" />
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} variant="outlined" title="Save" trailing={props => <Icon name="download" {...props} />} />
                <Button style={styles.button} variant="outlined" title="Cancel" trailing={props => <Icon name="cancel" {...props} />} />
            </View>
            <View style={styles.inputContainer}>

            </View>
        </View>
    )
};
export default NewProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent:"center",
        marginTop: 20,
        flex: 1,
    },
    titleText: {
        fontSize: 25,
        fontWeight: "800"
    },
    inputContainer: {
        flex: 3,
        justifyContent: "space-around",
        margin: 20,
        
    },
    inputTextContainer: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "green",
    
    },
    buttonContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button: {
        borderRadius: 15,
        
    },
    space:{
        flex: 1,
    },
})