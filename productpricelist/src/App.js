import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import Button from './components/Button/button';
import Forms from './components/Forms/form';
import List from './components/List/list';




const buttonTextDetail = [{ Id: 1, title: "Artan Fiyat" }, { Id: 2, title: "Azalan Fiyat" }, { Id: 3, title: "Tarih" }];
const App = () => {
  const [list, setList] = useState([]);

  const handleList = (value) => {
    setList([...list, value]);
  }
  return (
    <SafeAreaView style={style.main_container}>
      <View style={style.container}>
        <Button titleArray={buttonTextDetail} />
      </View>
      <ScrollView>
        <View style={style.main_list_container}>
          <View style={style.main_list_data}>
            <List listData={list} />
          </View>
          <View style={style.list_main_form}>
            <Forms onChangeList={handleList} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const style = StyleSheet.create({

  main_container: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_list_container: {
    flexDirection: 'column',
  },
  main_list_data: {
    height: 450,
    borderWidth: 1,
    borderBottomColor: '#D3D3D3'
  },
  list_main_form: {
    padding: 10
  }



});



export default App;