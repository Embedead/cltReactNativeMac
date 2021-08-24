import React from 'react';
import {Text, View, TextInput,StyleSheet, Button} from 'react-native';

export const Welcome = ({route,navigation}) => {
  const {name} = route.params || "default";
  return(
    <View style={styles.view}>
      <Text style={styles.label}>Welcome {name || "default"}</Text>
      <Button style={styles.button} title="to Clalit site" onPress={()=>navigation.navigate("Webview",{uri:"https://www.clalit.co.il/he/Pages/default.aspx"})}/>
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label:{
    fontSize:18,
    fontWeight:"bold"
  },
  button:{
    padding: 10,
    backgroundColor:"green",
    fontSize: 18
  }
})