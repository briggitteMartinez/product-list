import { StyleSheet, View, Text } from "react-native";
import * as React from "react";
import { FAB } from "react-native-paper";
import { tokens } from "../helpers/translation/appStrings";
import { localize } from "../helpers/translation/translationConfig";
import { ProductContext } from "../contexts/ProductContext";


const ProductListScreen: React.FC = (props: any) => {
    const items = React.useContext(ProductContext)
    return (
        <View style={styles.container}>
            <View style={styles.text1Container}>
                <Text>{localize(tokens.screens.productListScreen.name)}</Text>
                <Text>{localize(tokens.screens.productListScreen.type)}</Text>
                <Text>{localize(tokens.screens.productListScreen.price)}</Text>
            </View>
            <View style={styles.text2Conatiner}><Text style={styles.text2}>You do not have any products. Press the green button below to add a new one</Text></View>
            <View>
                <FAB
                    style={styles.fab}
                    icon='plus'
                    onPress={() => props.navigation.navigate('NewProductScreen')} />
            </View>
        </View>
    )
}

export default ProductListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    dividerContainer: {
        flex: 1,
    },
    text1Container : {
        marginTop: 10,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding:10,
        borderBottomWidth: 1,
    },
    text2Conatiner: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
    },
    text2:{
        textAlign: "center",
        padding: 25,
        fontSize: 25,
        color: "gray",
        marginBottom: 50,

    },
    fabContainer: {
        flex: 1,
    },
    fab: {
        position: 'absolute',
        backgroundColor: 'green',
        margin: 30,
        right: 0,
        bottom: 0,
    }
})