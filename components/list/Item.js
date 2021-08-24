import React from "react"
import {View, FlatList,StyleSheet,Text,Image,Pressable} from "react-native"
import * as Animatable from "react-native-animatable";
import {SvgUri,SvgCssUri} from "react-native-svg"
import {DetailsModal} from "./DetailsModal"

export const Item = ({item})=>{
  const [open,setOpen] = React.useState(false);
  const [svgHeight,setSvgHeight] = React.useState(0);
  const [svgWidth,setSvgWidth] = React.useState(0);
  // React.useEffect(()=>{
  //   fetch(item.flag)
  //   .then(res => res.text())
  //   .then(data=>{
  //     console.log("flag res is",data)
  //   })
  // },[])
  return(
    
    <Animatable.View animation="slideInUp" style={styles.item}>
      <Pressable onPress={()=>{setOpen(true) 
      }}>

      <View style={styles.svgview}>
          <SvgCssUri width={"100%"} height="100%" uri={item.flag}/>
      </View>
      <Text style={styles.title}>{item.name}</Text>
      </Pressable>
      <DetailsModal open={open} onClose={()=>setOpen(!open)}>
        <View  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",aspectRatio:1.6}}>
          <SvgCssUri preserveAspectRatio="xMinYMin meet" width="100%" height="100%" uri={item.flag} />
        </View>
        <Text>Country name: {item.name}</Text>
        <Text>Capital: {item.capital}</Text>
        <Text>Region: {item.region}</Text>
        <Text>Currencies</Text>
        {item.currencies.map((currency,index)=>{
          return(
            <View key={index}>
            <Text>name: {currency.name}</Text>
            <Text>code: {currency.code}</Text>
            <Text>symbol: {currency.symbol}</Text>
            </View>
          )
        })}
      </DetailsModal>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection:"column",
    flexWrap:"nowrap",
    borderRadius:6,
    backgroundColor:"aquamarine",
    height:"auto",
    padding: 15,
    marginVertical:8,
    marginHorizontal:16,
  },
  svgview:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    aspectRatio:1.6,
  },
  title:{
    fontSize: 26
  },
})