import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { TextInput, Button } from '@react-native-material/core';
import { MaterialCommunityIcons as Icon,} from "@expo/vector-icons";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../helpers/types';


const EditProductScreen: React.FC<NativeStackScreenProps<StackScreens, 'EditProductScreen'>> = (props) => {
    const [disabled, setDisabled] = useState(true);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        setDisabled(name.length === 0);
        
    },[name]);


    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Edit Product</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput defaultValue={name}  onChangeText={setName} style={styles.inputTextContainer} label="Name" />
                <TextInput defaultValue={price} onChangeText={setPrice}style={styles.inputTextContainer} label="Price" />
                <TextInput defaultValue={type} onChangeText={setType}style={styles.inputTextContainer} label="Product Type" />
            </View>
            <View style={styles.buttonContainer}>
                <Button disabled={disabled} color={"green"} variant={disabled ? "outlined" : "contained"} style={styles.button} title="Save" trailing={props => <Icon name="download" {...props} />} onPress={() => { props.navigation.navigate('ProductListScreen') }} />
                <Button color={"green"} style={styles.button} variant="contained" title="Cancel" trailing={props => <Icon name="cancel" {...props} />} onPress={() => { props.navigation.navigate('ProductListScreen') }} />
            </View>
            <View style={styles.inputContainer}>

            </View>
        </View>
    )
};
export default EditProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 50,
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
        margin: 5,
    },
    button: {
        flex: 2,
        borderRadius: 15,
        margin: 5,
        height: 50,
        color: "green",
    
    },
    space: {
        flex: 1,
    },
})
