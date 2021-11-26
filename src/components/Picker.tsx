import { Picker} from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { ProductContext } from "../contexts/ProductContext";
import { useDoubleTap } from 'use-double-tap';



export const PickerView = () => {
    const context = React.useContext(ProductContext);
    const [value, setValue] = useState("");

    const bind = useDoubleTap((event) => {
        context?.setShowProduct(false)
        // Your action here
        console.log('Double tapped');
      });

     context?.setType(value);

    return (
        <View  >
            <TouchableOpacity onLongPress={() => context?.setShowProduct(false)} >

            <Picker
            
                mode='dialog'
                selectedValue={value}
                onValueChange={(v) =>
                    setValue(v)
                } prompt='Product Type'>
                    
                <Picker.Item label="Intergrated" value ="intergrated" />
                <Picker.Item label="Peripheral" value="peripheral" />
                
                
            </Picker>
            
            </TouchableOpacity>

        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderColor: "black",
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: "white",
        

    }

});


