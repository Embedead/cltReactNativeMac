import React from "react"
import {View, FlatList,StyleSheet,Text} from "react-native"
import {Item} from "./Item"





export const ListComp = () => {
  const [data,setData] = React.useState([]);
  React.useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;region")
      .then(result=> result.json())
      .then(jsonResult=>{setData(jsonResult)
         })
      .catch(err=>console.log("network error is", err))
  },[])
  const renderItem = ({item})=> <Item item={item}/>;
  return(
    <View style={styles.container}>
      {data.length!==0 && 
      <FlatList data={data} renderItem={renderItem} keyExtractor={item=>item.name}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  
  
})