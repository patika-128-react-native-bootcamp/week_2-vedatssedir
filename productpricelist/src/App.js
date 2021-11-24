import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import Button from './components/Button/button';
import Forms from './components/Forms/form';
import List from './components/List/list';

const buttonTextDetail = [{ Id: 1, title: "Artan Fiyat" }, { Id: 2, title: "Azalan Fiyat" }, { Id: 3, title: "Tarih" }];
const listData = [{ Id: 1, productName: "Araba", price: 40000 }, { Id: 2, productName: "Şapka", price: 350 }, { Id: 3, productName: "Çanta", price: 20 }];
const App = () => {

  return (
    <SafeAreaView style={style.main_container}>
      <View style={style.container}>
        <Button titleArray={buttonTextDetail} />
      </View>
      <ScrollView>


      <View style={style.main_list_container}>
        <View style={style.main_list_data}>
          <List listData={listData} />
        </View>
        <View style={style.list_main_form}>
          <Forms/>
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
    height :450,
    borderWidth :1,
    borderBottomColor :'#D3D3D3'
  },
  list_main_form:{
    padding:10
  }



});



export default App;