import React from "react"
import {View,StyleSheet} from "react-native"
import {ListComp} from "./List"

export const ListView = () => {
  const [data,setData] = React.useState([]);
  React.useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;region")
      .then(result=> result.json())
      .then(jsonResult=>{setData(jsonResult)
         })
      .catch(err=>console.log("network error is", err))
      console.log("ineffect")
  },[])
  

  return(

    <View style={styles.container}>
      <ListComp data={data}/>
  </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  
  
})