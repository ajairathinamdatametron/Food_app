import React,{useState} from "react";
import RazorpayCheckout from "react-native-razorpay";
import { useProfile } from "../Screens/ProfileScreen";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,Alert
} from "react-native";

const PaymentScreen = ({ route,navigation }: any) => {
  const { addOrder } = useProfile();

const cartItems = route?.params?.cartItems || [];

    const finalCost = route?.params?.finalCost ?? 0;
    const [selectedCard, setSelectedCard] = useState("visa");
    const tax = 7.00;
    const delivery = 20.00;
    const total = finalCost + tax + delivery; 
    const [checked, setChecked] = useState(false);

    const pay = () => {
  const options = {
    description: "Food Order",
    image: "https://razorpay.com/favicon.png",
    currency: "INR",
    key: "rzp_test_T8ujrjqwmNvpKx",
    amount: Math.round(total * 100),
    name: "FoodGo",
    prefill: {
      email: "test@example.com",
      contact: "9876543210",
      name: "Ajai",
    },
    theme: {
      color: "#EF2A39",
    },
  };

  RazorpayCheckout.open(options)
  .then((data: any) => {
    console.log(data);

    const order = {
      id: Date.now().toString(),
      items: cartItems,
      total,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      status: "Delivered",
      paymentStatus: "Success",
    };

    addOrder(order);

    navigation.navigate("Success");
  })
  .catch((error: any) => {
    console.log(error);

    const order = {
      id: Date.now().toString(),
      items: cartItems,
      total,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      status: "Failed",
      paymentStatus: "Failed",
    };

    addOrder(order);

    navigation.navigate("Failure");
  });
};
     const cards = [
    {
      id: "visa",
      type: "Credit Card",
      number: "**** **** **** 4589",
      logo: require("../assets/icons/logo.png"),
    },
    {
      id: "master",
      type: "Debit Card",
      number: "**** **** **** 7834",
      logo: require("../assets/icons/visa.png"),
    },
  ];
  




  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
      <View>
        <Text style={styles.head}>Order summary</Text>
      </View>
  <View style={styles.row}>
  <Text style={styles.List}>Order</Text>
  <Text style={styles.List}>${finalCost.toFixed(2)}</Text>
</View>
<View style={styles.row}>
  <Text style={styles.List}>Taxes</Text>
  <Text style={styles.List}>${tax.toFixed(2)}</Text>
</View>

<View style={styles.row}>
  <Text style={styles.List}>Delivery fees</Text>
  <Text style={styles.List}>${delivery.toFixed(2)}</Text>
</View>
<View style={styles.line} />

<View style={styles.row}>
  <Text style={styles.total}>Total</Text>
  <Text style={styles.total}>${total.toFixed(2)}
  </Text>
</View>
<View style={styles.row}>
  <Text style={styles.text}>Estimated delivery time:</Text>
  <Text style={styles.text}>15 - 30 mins</Text>
</View>
<View>
        <Text style={styles.head}>Payment methods</Text>
      </View>
          <View>
      {cards.map((card) => (
        <TouchableOpacity
  key={card.id}
  style={[
    styles.card,
    selectedCard === card.id && styles.selectedCard,
  ]}
  onPress={() => setSelectedCard(card.id)}
>
        

          {/* Logo */}
          <View style={styles.logoBox}>
  <Image source={card.logo} style={styles.logoBox} />
</View>

          {/* Card Details */}
          <View style={{ flex: 1 }}>
            <Text style={[styles.type,selectedCard === card.id && styles.selectedText,]}
>
  {card.type}
</Text>
            <Text style={[styles.number,selectedCard === card.id && styles.selectedText,]}
>
  {card.number}
</Text>

          </View>
          <View
            style={[
              styles.radio,
              selectedCard === card.id && styles.radioSelected,
            ]}
          >
            {selectedCard === card.id && (
              <View style={styles.innerCircle} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
    <View>
      <TouchableOpacity
  style={styles.checkboxContainer}
  onPress={() => setChecked(!checked)}
>
  <View style={[styles.checkbox, checked && styles.checked]}>
    {checked && <Text style={styles.tick}>✓</Text>}
  </View>

  <Text style={styles.checkboxText}>
    Save this card for future payments
  </Text>
</TouchableOpacity>
    </View>
    <View style={styles.row}>
      <View>
        <View>
          <Text style={styles.tc}>Total price</Text>
          <Text style={styles.total}>${total.toFixed(2)}</Text>
        </View>
      </View>
     <TouchableOpacity
  style={styles.payButton}
  onPress={pay}
>
  <Text style={styles.payButtonText}>Pay Now</Text>
</TouchableOpacity>
      </View>
  
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrow:{
       width:35,
        height:35,
        marginTop:25,
        marginLeft:5,
        shadowColor: "#000",
  shadowOpacity: 0.4,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
  elevation: 6
  },
  search: {
    width: 24,
    height: 24,
    marginTop:26,
    resizeMode: "contain",
  },
  head:{
    fontFamily:'poppins',
    fontSize:20,
    marginTop:20,
    fontWeight:600,
    color:'#3C2F2F',

  },
  List:{
   color: '#7D7D7D',
   fontSize:20,
   marginTop:15,
  },
  total:{
    fontSize: 22, 
    fontWeight: "700",
    marginTop:10,

  },
  row:{
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  text:{
    fontSize:15,
    color:'#3C2F2F',
    marginTop:10,

  },line: {
  height: 1,
  backgroundColor: "#F0F0F0",
  marginVertical: 15,
},
 card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 18,
    padding: 16,
    marginVertical: 10,
  },
  selectedCard: {
  backgroundColor: "#3C2F2F",
},

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  radioSelected: {
    borderColor: "#ececec",
  },

  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#e7e7e7",
  },

  logoBox: {
    width: 55,
    height: 40,
    resizeMode:'contain',
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  
  type: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3C2F2F",
  },

  number: {
    fontSize: 14,
    color: "#7D7D7D",
    marginTop: 4,
  },
  selectedText: {
  color: "#FFFFFF",
},
checkboxContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 20,
},

checkbox: {
  width: 22,
  height: 22,
  borderWidth: 2,
  borderColor: "#EF2A39",
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
},

checked: {
  backgroundColor: "#EF2A39",
},

tick: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "bold",
},

checkboxText: {
  marginLeft: 10,
  fontSize: 16,
  color: "#808080",
},tc:{
  fontSize:15,
  marginTop:140,
  marginLeft:10,
},
payButton: {
  backgroundColor: "#3C2F2F",
  width:190,
  height: 65,
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
   marginTop:140,
},

payButtonText: {
  color: "#FFFFFF",
  fontSize: 18,
  fontWeight: "700",
},


    
});
export default PaymentScreen;

