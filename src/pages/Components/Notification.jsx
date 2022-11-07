import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default function Notification({isVisible, isMessage, color}) {
    const [modalVisible, setModalVisible] = useState(isVisible);
    const [message, setMessage] = useState(isMessage);
    const [colorChange, setColor] = useState(color);

    // useEffect(() => {
       

    // }, [modalVisible])

  //   return (
    
  // )
}

