import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const OrderNowButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Order Now</Text>
    </TouchableOpacity>
  );
};

export default OrderNowButton;

const styles = StyleSheet.create({
 button: {
    width:200,
    height:70,
  backgroundColor: "#2e2224",
  paddingVertical: 14,
  paddingHorizontal: 25, // 🔥 add this
  borderRadius: 14,
  marginLeft:50,
  marginRight:30,
  alignItems: "center",
  justifyContent: "center",
},

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});