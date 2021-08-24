import React from "react"
import {View, StyleSheet} from "react-native"
import {SvgUri,SvgXml,SvgCss} from "react-native-svg"

export const Monster = ()=>{
    [monsterPath, setMonsterPath] = React.useState();
    React.useEffect(()=>{
        fetch("https://app.pixelencounter.com/api/basic/monsters?endRange=2")
        .then(results=>results.json())
        .then(jres => {
            setMonsterPath(jres.results)
            console.log("results are",jres.results[0].svgContent)
        })
    },[])

    return(
        <View style={styles.container}>
            {monsterPath && 
                <SvgCss xml={monsterPath[0].svgContent}/>
            // <SvgUri uri={"https://app.pixelencounter.com/api/basic/monsters/random"}/>
             }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderRadius:6,
        backgroundColor:"aquamarine",
        padding: 15,
        marginVertical:8,
        marginHorizontal:16,

    }
})