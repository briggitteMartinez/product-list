import { Text, TouchableOpacity,StyleSheet, View } from "react-native";
import * as React from "react";
import { FAB } from "react-native-paper";

const ProductListScreen: React.FC = (props: any) => {
    return (

        <FAB
        style={styles.fab}
        icon='plus'  
        onPress={() => props.navigation.navigate('NewProduct')} />
    )
}

export default ProductListScreen;

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      backgroundColor: 'green',
      margin: 30,
      right: 0,
      bottom: 0,
    }
})