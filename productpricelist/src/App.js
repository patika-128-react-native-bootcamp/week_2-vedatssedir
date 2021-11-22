import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Button from './components/Button/button';

const buttonText=[{Id:1,title :"Artan Fiyat"},{Id:2,title:"Azalan Fiyat"},{Id:3,title:"Tarih"}];

const App = () => {
  
  return (
    <SafeAreaView style={style.main_container}>
      <View style={style.container}>
        <Button  titleArray={buttonText}/>
      </View>
    </SafeAreaView>

  );
}

const style = StyleSheet.create({

  main_container: {
    flex: 1,
    margin :10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }


});



export default App;