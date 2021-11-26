import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity,Modal } from 'react-native';
import { TextInput, Button } from '@react-native-material/core';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../helpers/types';
import { ProductContext } from "../contexts/ProductContext";
import { PickerView } from "../components/Picker"


const NewProductScreen: React.FC<NativeStackScreenProps<StackScreens, 'NewProductScreen'>> = (props) => {
    const [disabled, setDisabled] = useState(true);
    const [productType, setproductType] = useState('Peripheral')



    const context = React.useContext(ProductContext);


    const handleAddProducts = () => {
        context?.setProducts([...context.products,  { name: context!.name, price: context!.price, type: context.type, }]);
        console.log(context?.name);
        context?.setName("");
        context?.setPrice("");
        context?.setType("");
        context?.setShowProduct(true)
        { props.navigation.navigate('ProductListScreen') }
    }
    const handleType = () => {
        setproductType(context!.type);
        context?.setShowProduct(true)
    }

    useEffect(() => {
        setDisabled(context?.name.length === 0);
        console.log("useEffect")

    }, [context?.name]);


    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Create New Product</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput defaultValue={context?.name} onChangeText={(text) => context?.setName(text)} style={styles.inputTextContainer} label="Name" />
                <TextInput defaultValue={context?.price} onChangeText={context?.setPrice} style={styles.inputTextContainer} label="Price" />
                {context?.showProduct ? <PickerView/> :
                <Button variant="outlined" color={"white"}style={styles.inputTextContainer} title={productType} onPress={() => handleType()}>
                
                </Button>  }

            </View>
            <View style={styles.buttonContainer}>
                <Button disabled={disabled} color={"green"} variant={disabled ? "outlined" : "contained"} style={styles.button} title="Save" trailing={props => <Icon name="download" {...props} />} onPress={() => handleAddProducts()} />
                <Button color={"green"} style={styles.button} variant="contained" title="Cancel" trailing={props => <Icon name="cancel" {...props} />} onPress={() => { props.navigation.navigate('ProductListScreen') }} />
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
        backgroundColor: '#D2E0D3',
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
        justifyContent: "space-between",
        margin: 20,

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