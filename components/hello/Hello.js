import React from 'react';
import {Text, View, TextInput,StyleSheet,Button} from 'react-native';
import * as Animatable from "react-native-animatable";

const Hello = ({navigation}) => {
  AnimatedTextInput = Animatable.createAnimatableComponent(TextInput);
  AnimatedButton = Animatable.createAnimatableComponent(Button);
  const [text,onChangeText] = React.useState("");
  return (
    <View style={styles.view}>
      <Animatable.Text animation="fadeInUp" style={styles.label}>Hello Human</Animatable.Text>
      <AnimatedTextInput animation="fadeInUpBig" style={styles.input} value={text} placeholder="enter name" onChangeText={onChangeText}/>
      <AnimatedButton animate="fadeInLeft" style={styles.button} disabled={text ===""} title="next" onPress={()=>navigation.navigate('Welcome',{name:text})}/>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
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
    backgroundColor:"aquamarine",
    fontSize: 18
  }
})

export default Hello;
