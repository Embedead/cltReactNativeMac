import React from "react"
import {View,Modal,Text,Pressable,StyleSheet} from "react-native"

export const DetailsModal = ({open,onClose,children}) => {
  const [modalVisible,setModalVisible] = React.useState(false);

  const closeAction = () =>{
    onClose();
    setModalVisible(!modalVisible)
  }

  React.useEffect(()=>{
    if(open){
      setModalVisible(true);
    }
  },[open])
  return(
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAction}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {children}
          <Pressable style={[styles.button,styles.buttonClose]} onPress={closeAction}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    display:"flex",
    height:"100%",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end",
    padding:16,
  },
  modalView: {
    width:"100%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 7,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
