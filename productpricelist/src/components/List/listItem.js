
import React from "react";
import { View,StyleSheet,Text } from 'react-native';

const ListItem = ({ listItem }) => {
    return (
        <View style={style.list_data}>
            <Text style={style.list_text}>{listItem.productName}</Text>
            <Text style={style.list_text}>{listItem.price}</Text>
        </View>
    );
}

const style=StyleSheet.create({
    list_text :{
        color: 'black'
    },
    list_data: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
});

export default ListItem;