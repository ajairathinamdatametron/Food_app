import React,{ useState } from 'react';
import Slider from "@react-native-community/slider";
import OrderNowButton from "../Components/Appbutton/Orderbutton";

import { View, Text ,Image,StyleSheet,TouchableOpacity} from "react-native";



const product4 = ({ navigation }: any) => {
    const [spicy, setSpicy] = useState(50);
  const [portion, setPortion] = useState(1);
  const finalCost = portion * 62;
  const cartItems = [
  {
    name: "Fried Chicken Burger",
    qty: portion,
    price: 62,
    image: require("../assets/images/Hamburger3.png"),
  },
];

  return (
    <View>
        <View style={{ flexDirection: "row" }}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
  <Image
    source={require("../assets/icons/left-arrow.png")}
    style={styles.arrow}
  />
</TouchableOpacity>
        </View>
        
      <Image
      source={require("../assets/images/Hamburger3.png")}
      style={styles.burger}
        />
        <View>
            <Text style={styles.tittle}>Fried Chicken Burger</Text>
                  <Text style={styles.ratingtext}>⭐ 4.5 - 14 mins</Text>
                  <Text style={styles.paragraph}>Indulge in our crispy and savory Fried Chicken Burger, made with a juicy chicken patty, hand-breaded and deep-fried to perfection, served on a warm bun with lettuce, tomato, and a creamy sauce.</Text>
        </View>
   <View style={styles.rowContainer}>

  {/* LEFT - Spicy */}
  <View style={styles.spicy}>
    <Text style={styles.title}>Spicy</Text>

    <Slider
  style={{ width: 160, height: 20 }}
  minimumValue={0}
  maximumValue={100}
  value={spicy}
  onSlidingComplete={setSpicy}   
  minimumTrackTintColor="#EF2A39"
  maximumTrackTintColor="#121010"
  thumbTintColor="#EF2A39"
/>

    <View style={styles.labelRow}>
      <Text style={styles.mild}>Mild</Text>
      <Text>{Math.round(spicy)}%</Text>
      <Text style={styles.hot}>Hot</Text>
    </View>
  </View>

  {/* RIGHT - Portion */}
  <View style={styles.portion}>
    <Text style={styles.title}>Portion</Text>

    <View style={styles.counterRow}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setPortion(prev => Math.max(1, prev - 1))}
      >
        <Text style={styles.btnText}>−</Text>
      </TouchableOpacity>

      <Text style={styles.count}>{portion}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setPortion(prev => prev + 1)}
      >
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>

    
  </View>

</View>
<View style={styles.bottomRow}>

   <Text style={styles.cost}>$ {portion*62}
    </Text>

  <OrderNowButton onPress={() => navigation.navigate("Payment",{finalCost, cartItems})} />

</View>

      </View>
   
    
  );
};

const styles = StyleSheet.create({
   rowContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingHorizontal: 0,
},

    burger:{
        width:350,
        height:355,
        top:10,
        left:25,
        resizeMode:'contain',
    
    },
    tittle:{
        fontSize:20,
        fontWeight:600,
        marginTop:60,
        marginLeft:20,
        color:'#3C2F2F'

    },
    ratingtext:{
        fontSize:18,
        marginLeft:20,
        color:'#808080',
    },
    paragraph:{
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        fontSize:15,
        fontFamily:'Roboto',
        color:'#6A6A6A',

    },
    arrow:{
        width:35,
        height:35,
        marginTop:25,
        marginLeft:15,
        shadowColor: "#000",
  shadowOpacity: 0.4,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
  elevation: 6

    },
    search:{
        width:25,
        height:25,
        marginTop:25,
        marginLeft:295,

    
  },

  title: {
    fontSize: 15,
    marginLeft:10,
    marginTop: 10,
    marginBottom:10,


  },

  labelRow: {
  flexDirection: "row",
  justifyContent: "space-between", 
  marginTop: 5,
},

  mild: {
    color: "green",
    fontWeight: "600",
    marginLeft:10,
  },

  hot: {
    color: "#EF2A39",
    fontWeight: "600",
    marginRight:18,
    
  },

  counterRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 10, // if supported
},

  button: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#EF2A39",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  btnText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    
  },

  count: {
    fontSize: 24,
    fontWeight: "700",
  },spicy:{
    width:180,
  },
  portion:{
    width:180,
    marginLeft:20,
  },

  cost: {
    fontSize:20,
  width: 100,
  height: 66,
  color: "#fff",     
  fontWeight: "700",
  backgroundColor: "#EF2A39",
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  paddingVertical:20,
  paddingHorizontal: 20,
},
  bottomRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 20,
  marginTop: 20,
},
 


})

export default product4;