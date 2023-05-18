import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import CarItem from "./components/CarItem";



const App =() =>{

  return(
    <View style={Styles.container}>
      <CarItem/>
      <StatusBar style="auto"/>

    </View>


  );
};

const Styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
