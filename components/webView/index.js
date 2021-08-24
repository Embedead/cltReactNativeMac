import React from "react";
import {WebView} from "react-native-webview"

export const WebViewComp = ({route}) => {
  const {uri} = route.params || "https://www.clalit.co.il/he/Pages/default.aspx";
  return(
    <WebView source={{uri: uri}}/>
  )
}