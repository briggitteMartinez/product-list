import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import { FAB } from "react-native-paper";
import { tokens } from "../helpers/translation/appStrings";
import { localize } from "../helpers/translation/translationConfig";
import { ProductContext } from "../contexts/ProductContext";
import { ProductView } from "../components/ProductView";


const ProductListScreen: React.FC = (props: any) => {
    const context = React.useContext(ProductContext);

    

    const onPressButton = () => {
        alert('deleted!')
    }

    const deleteProduct = (index: any) => {
        let productsCopy = [...context!.products];
        productsCopy.splice(index, 1);
        context?.setProducts(productsCopy);
        onPressButton()
    }

    const handleEdit = (item:any, index:any) => {
        props.navigation.navigate('EditProductScreen' ,{ item: item, index: index})
    }


    return (
        <View style={styles.container}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{localize(tokens.screens.productListScreen.name)}</Text>
                <Text style={styles.headerText}>{localize(tokens.screens.productListScreen.type)}</Text>
                <Text style={styles.headerText}>{localize(tokens.screens.productListScreen.price)}</Text>
            </View>

            {
                context?.showProduct ?
                    context?.products.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onLongPress={() => deleteProduct(index)} onPress={() =>  handleEdit(item, index) }>
                                <ProductView name={item.name} type={item.type} price={item.price} />
                            </TouchableOpacity>
                            
                        )
                    }) : (<View style={styles.centerTextContainer}><Text style={styles.centerText}>{localize(tokens.screens.productListScreen.centerText)}</Text></View>)
            }
            <View style={styles.centerTextContainer}></View>

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
    headerTextContainer: {
        marginTop: 10,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
    },
    headerText: {
        fontWeight: 'bold',
    },
    centerTextContainer: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
    },
    centerText: {
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