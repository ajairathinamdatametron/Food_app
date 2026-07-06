import React, { useState } from "react";
import OutlinedInput from "../Components/OutlinedInput";
import { useProfile } from "../Screens/ProfileScreen";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const PaymentDetails = ({ navigation }: any) => {
  const { profile, setProfile } = useProfile();

const [cardHolder, setCardHolder] = useState(profile.cardHolder);
const [cardNumber, setCardNumber] = useState(profile.cardNumber);
const [expiryDate, setExpiryDate] = useState(profile.expiryDate);
const [cvv, setCvv] = useState(profile.cvv);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>

        {/* Header */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/icons/left-arrow.png")}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <Image
            source={require("../assets/icons/search.png")}
            style={styles.search}
          />
        </View>

        {/* Background Images */}
        <View style={styles.row}>
          <Image
            source={require("../assets/images/Hamburger.png")}
            style={styles.bg}
          />

          <View style={styles.cardImageContainer}>
            <Image
              source={require("../assets/images/credit-cards.png")}
              style={styles.cardImage}
            />
          </View>

          <Image
            source={require("../assets/images/Hamburger.png")}
            style={styles.rightbg}
          />
        </View>

        {/* White Card */}
        <View style={styles.card}>

          <Text style={styles.heading}>Payment Details</Text>

         <Text style={styles.value}>{cardHolder}</Text>

<Text style={styles.label}>Card Number</Text>
<Text style={styles.value}>{cardNumber}</Text>

<Text style={styles.label}>Expiry</Text>
<Text style={styles.value}>{expiryDate}</Text>

<Text style={styles.label}>CVV</Text>
<Text style={styles.value}>{cvv}</Text>

          <View style={styles.line} />

         

        </View>

      </View>
    </View>
  );
};

export default PaymentDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  overlay: {
    flex: 1,
    backgroundColor: "#EF2A39",
  },

  row: {
    flexDirection: "row",
  },

  smallRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 320,
    marginTop: 15,
  },

  arrow: {
    width: 35,
    height: 35,
    marginTop: 25,
    marginLeft: 15,
    zIndex: 999,
  },

  search: {
    width: 25,
    height: 25,
    marginTop: 30,
    marginLeft: 295,
  },

  bg: {
    position: "absolute",
    left: -90,
    width: 196,
    height: 196,
    resizeMode: "contain",
    opacity: 0.3,
  },

  rightbg: {
    position: "absolute",
    right: -90,
    width: 196,
    height: 196,
    resizeMode: "contain",
    opacity: 0.3,
  },

  cardImageContainer: {
  position: "absolute",
  top: 50,
  left: 110,

  width: 150,
  height: 150,

  justifyContent: "center",
  alignItems: "center",
  borderTopEndRadius: 75,
  borderTopLeftRadius: 75,
  backgroundColor: "#FFFFFF",
  shadowColor: "#000",

  zIndex: 999,
  elevation: 999,
},

  cardImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    
  },

  card: {
    flex: 1,
    marginTop: 160,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    alignItems: "center",
   

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3C2F2F",
    marginTop: 35,
    marginBottom: 10,
  },

  line: {
    width: "85%",
    height: 1,
    backgroundColor: "#E8E8E8",
    marginTop: 35,
    marginBottom: 30,
  },
  label: {
  fontSize: 14,
  color: "#7A7A7A",
  fontWeight: "600",
  marginTop: 15,
  marginBottom: 6,
  alignSelf: "flex-start",
  marginLeft: 30,
},

value: {
  width: "85%",
  fontSize: 16,
  color: "#000000",
  fontWeight: "500",
  backgroundColor: "#F8F8F8",
  borderRadius: 10,
  paddingVertical: 14,
  paddingHorizontal: 15,
  borderWidth: 1,
  borderColor: "#E5E5E5",
  marginBottom: 10,
},

  saveButton: {
    width: 180,
    height: 55,
    backgroundColor: "#EF2A39",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});