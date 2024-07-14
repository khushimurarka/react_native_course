import React from 'react'
import { View,StyleSheet } from 'react-native';

import Success from './Buttons/SuccesBtn'
import DangerB from './Buttons/DangerBtn'
import WarningB from './Buttons/WarningBtn'
import Info from './Buttons/InfoBtn';
const Buttons = () => {
  return (
    <View style={styles.container}>
        
        <Success style={styles.myBtn}/>
        <DangerB style={styles.myBtn}/>
        <WarningB style={styles.myBtn}/>
        <Info style={styles.myBtn}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin:10,
      },
      myBtn: {
        marginBottom: 40,
        padding: 20,
      },
});
export default Buttons;