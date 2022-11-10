import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default function Notification({isVisible, isMessage, color}) {


    const [modalVisible, setModalVisible] = useState(isVisible);
    const [colorChange, setColor] = useState(color);



    // useEffect(() => {
       
    // }, [modalVisible])

    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
        <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: colorChange,
      }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>        
      </View>
  )
}
