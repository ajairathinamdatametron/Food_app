import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";


const toppings = [
  { id: 1, name: "Tomato", price:12, image: require("../assets/images/tomato.png") },
  { id: 2, name: "Onion", price:6, image: require("../assets/images/onion.png") },
  { id: 3, name: "Bacons", price:25, image: require("../assets/images/cheese.png") },
  { id: 4, name: "Pickle", price:27, image: require("../assets/images/pickle.png") },
];

const sideOptions = [
  { id: 1, name: "Fries", price:20, image: require("../assets/images/fries.png") },
  { id: 2, name: "Onions", price:23, image: require("../assets/images/onions.png") },
  { id: 3, name: "Coleslaw", price:20, image: require("../assets/images/coleslaw.png") },
  { id: 4, name: "Salad", price:20, image: require("../assets/images/salad.png") },
];

const Customburger = ({ navigation }: any) => {
  const [spicy, setSpicy] = useState<number>(50);
  const [portion, setPortion] = useState(1);
  const BASE_PRICE = 30;
  const [totalCost, setTotalCost] = useState(BASE_PRICE);
  const finalCost = portion * totalCost;
  const addItem = (item: any) => {
  setTotalCost((prev) => prev + item.price);
};
  const cartItems = [
  {
    name: "Custom Burger",
    qty: portion,
    price: finalCost,
    image: require("../assets/images/customBurger.png"),
  },
];

  const renderCard = (item: any) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.cardImage} />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.cardTitle}>{item.name}</Text>

       
  <TouchableOpacity
    style={styles.plusButton}
    onPress={() => addItem(item)}
  >
    <Text style={styles.plusText}>+</Text>
  </TouchableOpacity>
      </View>
    </View>
  );

  const renderSection = (title: string, data: any[]) => (
    <View style={styles.section}>
      <Text style={styles.heading}>{title}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {data.map(renderCard)}
      </ScrollView>
    </View>
  );

 return (
  <View style={styles.container}>
    {/* Top Content with Padding */}
    <View style={styles.content}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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

      {/* Burger Section */}
      <View style={styles.row}>
        <Image
          source={require("../assets/images/customBurger.png")}
          style={styles.img}
        />

        <View style={styles.rightContainer}>
          <Text style={styles.title}>
            <Text style={styles.bold}>Customize</Text> Your Burger to Your
            Tastes. Ultimate Experience
          </Text>

          {/* SPICY */}
          <Text style={styles.sliderTitle}>Spicy</Text>

          <Slider
            style={{ width: "100%", height: 40 }}
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

          {/* Portion */}
          <Text style={styles.sliderTitle}>Portion</Text>

          <View style={styles.counterRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setPortion((p) => Math.max(1, p - 1))}
            >
              <Text style={styles.btnText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.count}>{portion}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setPortion((p) => p + 1)}
            >
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    
    <View style={styles.sections}>
      {renderSection("Toppings", toppings)}
      {renderSection("Side Options", sideOptions)}
    </View>

        <View style={styles.row}>
          <View>
            <View>
              <Text style={styles.tc}>Total price</Text>
              <Text style={styles.total}>
  ₹{finalCost}
</Text>
            </View>
          </View>
          <TouchableOpacity
      style={styles.payButton}
      onPress={() =>
  navigation.navigate("Payment", {
    finalCost,
    cartItems,
  })
}
    >
      <Text style={styles.payButtonText}>Pay Now</Text>
    </TouchableOpacity>
      </View>
  </View>
);
};

export default Customburger;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#fff",
  
},
content: {
  paddingHorizontal: 20,
},
section: {
  marginBottom: 25,
},
sections: {
  marginBottom: 25,
},

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  arrow: { width: 35, height: 35, marginTop: 25 },
  search: { width: 25, height: 25, marginTop: 25 },

  row: {
    flexDirection: "row",
    marginTop: 40,
  },

  img: {
    width: 217,
    height: 297,
    resizeMode: "contain",
    marginLeft: -50,
  },

  rightContainer: {
    flex: 1,
    marginLeft: 20,
  },

  title: {
    fontSize: 12,
    color: "#3C2F2F",
    lineHeight: 22,
  },

  bold: {
    fontWeight: "700",
    fontSize: 14,
  },

  sliderTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  mild: { color: "green", fontWeight: "600" },
  hot: { color: "#EF2A39", fontWeight: "600" },

  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },

  button: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#EF2A39",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  btnText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },

  count: {
    fontSize: 24,
    fontWeight: "700",
  },


  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    color: "#3C2F2F",
    paddingLeft:10,
  },

  scrollContainer: {
    paddingRight: 20,
  },

  card: {
    width: 90,
    
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 15,
    backgroundColor: "#3C2F2F",
    marginTop: 10,
    elevation: 8,
    
    
  },

  imageContainer: {
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius:15,
    borderStartEndRadius:15,
  },

  cardImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  bottomContainer: {
    height: 40,
    backgroundColor: "#3C2F2F",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingLeft:10,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },

  plusButton: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#EF2A39",
    justifyContent: "center",
    alignItems: "center",
  },

  plusText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  tc:{
  fontSize:15,
  bottom:50,
  left:20,
  
  
},
payButton: {
  backgroundColor: "#EF2A39",
  width:190,
  height: 65,
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
  left:90,
  bottom:50,
  right:0,
  
},

payButtonText: {
  color: "#FFFFFF",
  fontSize: 18,
  fontWeight: "700",
},
 total:{
    fontSize: 30, 
    fontWeight: "700",
    marginTop:10,
    bottom:50,
    left:20,
 },




});