import React from "react";
import { View, Text, StyleSheet } from "react-native";


export const ProductView = (props: any) => {
    

    return (
        <View style={styles.container}>
            <Text style={styles.productText}>{props.name}</Text>
            <Text style={styles.productText}>{props.type}</Text>
            <Text style={styles.productText}>{props.price}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2E0D3',
        margin: 6,
        marginTop: 15,
        textAlign: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 0.5,

    },
    productText: {
        maxWidth: '25%',
    },

});

