import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
const Forms = ({ onChangeList }) => {
    const [value, setValue] = useState({ productName: "", price: 0 });
    
    const handleFormData = () => {
        onChangeList(value);
    }
    return (
        <View>
            <Text style={style.form_label}>Name</Text>
            <TextInput style={style.form_textInput} value={value.productName} onChangeText={(text) => setValue({ ...value, productName: text })} />
            <Text style={style.form_label}>Price</Text>
            <TextInput style={style.form_textInput} keyboardType="numeric" value={value.price} onChangeText={(text) => setValue({ ...value, price: text })} />
            <TouchableOpacity style={style.form_button} onPress={handleFormData}>
                <Text style={style.text_button}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}
const style = StyleSheet.create({
    form_textInput: {
        borderRadius: 10,
        backgroundColor: '#D3D3D3',
        height: 40,
        padding: 10
    },
    form_label: {
        color: 'black',
        margin: 5
    },
    form_button: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'gray'
    },
    text_button: {
        fontWeight: 'bold',
        color: 'white'
    }
});



export default Forms;