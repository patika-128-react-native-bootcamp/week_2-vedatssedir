import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const Button = ({ titleArray }) => {
    const [selected, setSelected] = useState(null);

    const handleSelectedItem = (item) => {
        setSelected(item);
        switch (item.Id) {
            case 1: {
                console.log("Artan Fiyat");
                break;
            }
            case 2: {
                console.log("Azalan Fiyat");
                break;
            }
            case 3: {
                console.log("Tarih");
                break;
            }
            default:

                break;
        }
    }
    return (
        <View>
            <FlatList horizontal={true} data={titleArray} renderItem={({ item }) => (
                <TouchableOpacity style={[style.button, { backgroundColor: item === selected ? '#212121' : '#D3D3D3' }]} onPress={() => handleSelectedItem(item)}>
                    <Text key={item.Id} style={[style.text_button, { color: item === selected ? "white" : "black" }]}>{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}

const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5
    },
    text_button: {
        padding: 5,
        fontWeight: 'bold'
    }
});

export default Button;