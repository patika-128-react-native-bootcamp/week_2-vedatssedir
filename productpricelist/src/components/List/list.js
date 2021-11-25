import React from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from "./listItem";

const List = ({ listData }) => {

    return (
        <View>
            <FlatList data={listData} renderItem={({ item }) => (
                <View >
                    <View>
                        <ListItem  listItem ={item}/>
                    </View>
                    <View  style={style.list_divider}/>
                </View>

            )} />
        </View>
    );
}

const style = StyleSheet.create({

    list_divider:{
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
    },
});

export default List;