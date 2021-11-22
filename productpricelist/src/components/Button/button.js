import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';


const Button = ({ titleArray }) => {

    return (
        <View>
            <FlatList horizontal={true} data={titleArray} renderItem={({ item }) => (
                <TouchableOpacity style={style.button}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}

const style = StyleSheet.create({

    button: {
        backgroundColor: '#D3D3D3',
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