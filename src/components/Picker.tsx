import { Picker} from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Alert} from 'react-native';
import { ProductContext } from "../contexts/ProductContext";



export const PickerView = () => {
    const context = React.useContext(ProductContext);
    const [value, setValue] = useState("");


    return (
        <View >
            <Picker
                mode='dialog'
                selectedValue={value}
                onValueChange={(v) =>
                    setValue(v)
                } prompt='Product Type'>
                <Picker.Item label="Intergrated" value="intergrated" />
                <Picker.Item label="Peripheral" value="peripheral" />
            </Picker>

        </View>

    )
};


