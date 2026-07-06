import React, { useState, useRef, useEffect } from "react";
import { Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { useProfile } from "../Screens/ProfileScreen";



import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,TouchableOpacity,
  FlatList,Dimensions,Animated
} from "react-native";


const screens = [
  "Home",
  "UserScreen",
  "customburger",
  "ChatScreen",
  "Favorite",
];



const foods = [
   {
    id: "1",
    name: "Cheeseburger",
    image: require("../assets/images/Cheeseburger.png"),
    shop: "Wendy's Burger",
    rating: "4.9",
    price: 54,
    liked: false,
    type: "veg",
     category: ["Combos"],
    screen: "product1",
  },
  {
    id: "2",
    name: "Hamburger",
    image: require("../assets/images/Hamburger.png"),
    shop: "Veggie Burger",
    rating: "4.8",
    price: 38,
    liked: false,
    type: "veg",
    category: ["Combos", "Sliders"],
    screen: "product2",
    
  },
  {
    id: "3",
    name: "Hamburger",
    image: require("../assets/images/Hamburger2.png"),
    shop: "Chicken burger",
    rating: "4.5",
    price:58,
    liked: false,
    type: "nonveg",
    category: ["Sliders","offers"],
    screen: "product3",
  },
  {
    id: "4",
    name: "Hamburger",
    image: require("../assets/images/Hamburger3.png"),
    shop: "Chiken burger",
    rating: "4.6",
    price:62,
    liked: false,
    type: "nonveg",
    category: ["Sliders"],
    screen: "product4",
  },
  {
    id: "5",
    name: "veg pizza",
    image: require("../assets/images/pizza1.png"),
    shop: "veg pizza",
    rating: "5.7",
    price:80,
    liked: false,
    type: "veg",
    category: ["pizza"],
    screen: "product5",
  },
  {
    id: "6",
    name: "Chicken pizza",
    image: require("../assets/images/pizza3.png"),
    shop: "Chicken pizza",
    rating: "7.7",
    price:150,
    liked: false,
    type: "nonveg",
    category: ["pizza"],
    screen: "product6",
  },
  
  
];
const icons = [
  require("../assets/icons/home.png"),
  require("../assets/icons/user2.png"),
  require("../assets/icons/plus.png"),
  require("../assets/icons/chat.png"),
  require("../assets/icons/heart.png"),
];
const { width } = Dimensions.get("window");
function HomeScreen({ navigation ,route }: any) {
  const [foodList, setFoodList] = useState(foods);
 const { favorites, toggleFavorite} = useProfile();
 
  const [search, setSearch] = useState("");
  useEffect(() => {
  const filters = route?.params?.filters;
 
  



  if (!filters) {
    setFoodList(foods);
    return;
  }

  let filtered = [...foods];

  // Veg / Non Veg
  if (filters.type) {
    filtered = filtered.filter(
      item => item.type === filters.type
    );
  }

if (filters.ratingSort === "high") {
  filtered.sort((a, b) => Number(b.rating) - Number(a.rating));
}

if (filters.ratingSort === "low") {
  filtered.sort((a, b) => Number(a.rating) - Number(b.rating));
}
  if (filters.sort === "low") {
   filtered.sort((a, b) => a.price - b.price);
  }

  if (filters.sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  setFoodList(filtered);

}, [route?.params?.filters]);
  
const [activeTab, setActiveTab] = useState(0);
const TAB_WIDTH = width / 5;
const center = activeTab * TAB_WIDTH + TAB_WIDTH / 2;
const tabPositionX = useRef(new Animated.Value(0)).current;



const moveCurve = (index: number) => {
  setActiveTab(index);

  Animated.spring(tabPositionX, {
    toValue: index,
    useNativeDriver: true,
  }).start();
};
const [selectedCategory, setSelectedCategory] = useState("All");
const categories = ["All", "Combos", "Sliders","offers","pizza"];
const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = () => {
  setRefreshing(true);

  // Reset food list
  setFoodList(foods);

  

  setTimeout(() => {
    setRefreshing(false);
  }, 500);
};
 
  return (
    
    
    <View style={{ flex: 1, backgroundColor: "#fff" }}>

      <Text style={styles.logo}>Foodgo</Text>
      <Text style={styles.sub}>Order your favourite food!</Text>

      {/* SEARCH */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Image
            source={require("../assets/icons/search.png")}
            style={styles.icon}
          />

         <TextInput
  placeholder="Search"
  placeholderTextColor="#000"
  value={search}
  onChangeText={(text) => {
    setSearch(text);

    if (text.trim() === "") {
      setFoodList(foods);
    } else {
      const filtered = foods.filter(food =>
        food.name.toLowerCase().includes(text.toLowerCase()) ||
        food.shop.toLowerCase().includes(text.toLowerCase())
      );

      setFoodList(filtered);
    }
  }}
  style={styles.input}
/>
        </View>

        <View style={styles.filterBox}>
          <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
  <Image
    source={require("../assets/icons/filter.png")}
    style={styles.filterIcon}
  />
</TouchableOpacity>
        </View>
      </View>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {categories.map((item) => (
    <TouchableOpacity
      key={item}
      onPress={() => {
  setSelectedCategory(item);

  if (item === "All") {
    setFoodList(foods);
  } else {
    const filtered = foods.filter(food =>
      food.category.includes(item)
    );

    setFoodList(filtered);
  }
}}
      style={[
        styles.card,
        selectedCategory === item && styles.selectedCard,
      ]}
    >
      <Text
        style={[
          styles.cardText,
          selectedCategory === item && styles.selectedCardText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  ))}
</ScrollView>
      
      


    <FlatList
  data={foodList}
  keyExtractor={(item) => item.id}
  numColumns={2}
  refreshing={refreshing}
  onRefresh={onRefresh}
  contentContainerStyle={{
    padding: 10,
    paddingBottom: 120,
  }}
  renderItem={({ item }) => (
    <Pressable
  style={styles.foodCard}
  onPress={() => navigation.navigate(item.screen)}
>

     
      <TouchableOpacity
  style={styles.heart}
 onPress={() => toggleFavorite(item)}
>
  <Image
    source={
      favorites.some((food: any) => food.id === item.id)
        ? require("../assets/icons/heartfilled.png")
        : require("../assets/icons/heartoutline.png")
    }
    style={styles.heartIcon}
  />
</TouchableOpacity>
      {/* FOOD IMAGE */}
      <Image source={item.image} style={styles.foodImage} />

      {/* FOOD NAME */}
      <Text style={styles.foodName}>{item.name}</Text>

      {/* SHOP NAME */}
      <Text style={styles.shop}>{item.shop}</Text>

      {/* RATING + STAR */}
      <View style={styles.ratingRow}>
        <Image
          source={require("../assets/icons/star.png")}
          style={styles.star}
        />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>

    </Pressable>
  )}
/>
<View style={styles.bottomContainer}>
  
 <Svg
  width={width}
  height={90}
  style={{
    position: "absolute",
    bottom: 0,
  }}
>
  
  <Path
  d={`
    M0 20

    H${center - 60}

    C${center - 40} 20
     ${center - 40} 55
     ${center} 55

    C${center + 40} 55
     ${center + 40} 20
     ${center + 60} 20

    H${width}

    V90
    H0
    Z
  `}
  fill="#EF2A39"
/>
</Svg>
<TouchableOpacity
  style={{
    position: "absolute",
    top: -25,
  }}
  onPress={() => {
    console.log("Active:", activeTab);
    console.log("Screen:", screens[activeTab]);
    navigation.navigate(screens[activeTab]);
  }}
>
  <Animated.View
    style={[
      styles.activeCircle,
      {
        transform: [
          {
            translateX: tabPositionX.interpolate({
              inputRange: [0, 1, 2, 3, 4],
              outputRange: [
                15,
                TAB_WIDTH + 15,
                TAB_WIDTH * 2 + 15,
                TAB_WIDTH * 3 + 15,
                TAB_WIDTH * 4 + 15,
              ],
            }),
          },
        ],
      },
    ]}
  >
    <Image
      source={icons[activeTab]}
      style={styles.activeIcon}
    />
  </Animated.View>
</TouchableOpacity>


  <View style={styles.iconRow}>
  <TouchableOpacity onPress={() => moveCurve(0)}>
    <Image
      source={require("../assets/icons/home.png")}
      style={[
        styles.navIcon,
        activeTab === 0 && { opacity: 0 },
      ]}
    />
  </TouchableOpacity>

  {/* User */}

  <TouchableOpacity
  onPress={() => {
    moveCurve(1);
    navigation.navigate("UserScreen");
  }}
>

    <Image
      source={require("../assets/icons/user2.png")}
      style={[
        styles.navIcon,
        activeTab === 1 && { opacity: 0 },
      ]}
    />
  </TouchableOpacity>

  {/* Plus */}
 <TouchableOpacity
  onPress={() => {
    moveCurve(2);
    navigation.navigate("customburger");
  }}
>
  <Image
    source={require("../assets/icons/plus.png")}
    style={[
      styles.navIcon,
      activeTab === 2 && { opacity: 0 },
    ]}
  />
</TouchableOpacity>

  {/* Chat */}
  <TouchableOpacity
  onPress={() => {
    moveCurve(3);
    navigation.navigate("ChatScreen");
  }}
>
  <Image
    source={require("../assets/icons/chat.png")}
    style={[
      styles.navIcon,
      activeTab === 3 && { opacity: 0 },
    ]}
  />
</TouchableOpacity>

  {/* Heart */}
  <TouchableOpacity
  onPress={() => {
    moveCurve(4);
    navigation.navigate("Favorite");
  }}
>
  <Image
    source={require("../assets/icons/heart.png")}
    style={[
      styles.navIcon,
      activeTab === 4 && { opacity: 0 },
    ]}
  />
</TouchableOpacity>
</View>

</View>

</View>

  );
};
const styles = StyleSheet.create({
  heart: {
  position: "absolute",
  right: 10,
  top: 10,
},

heartIcon: {
  width: 40,
  height: 40,
  resizeMode: "contain",
  paddingBottom:380,
},
dashboard:{
  width: 40,
  height: 40,
  resizeMode: "contain",
  
  marginBottom:20,
  

},

shop: {
  fontSize: 12,
  color: "#777",
  marginTop: 2,
  marginRight:50,
},

ratingRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 10,
  
},

star: {
  width: 14,
  height: 14,
  marginRight: 5,
},

rating: {
  fontSize: 15,
  fontWeight: "bold",
  paddingRight:80,
},
  logo: { fontSize: 32,
     fontFamily: "Lobster-Regular", 
     marginLeft: 20,
      marginTop: 40, 
    },
   sub: { 
    fontSize: 18,
     color: "#6A6A6A", 
    marginLeft: 20, 
  }, 
  selectedCard: {
  backgroundColor: "#EF2A39",
},

selectedCardText: {
  color: "#fff",
},

   searchRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginHorizontal: 20,
     marginTop: 20,
    

     },
    searchBox: {
       flex: 1, 
      flexDirection: "row", 
      alignItems: "center",
       borderWidth: 1,
      
       borderColor: "#eee",
        borderRadius: 10,
        paddingHorizontal: 10, 
       backgroundColor: "#fff", 
       height: 45,
       }, 
    icon: { 
      width: 18,
       height: 18,
       marginRight: 8, 

    }, 
   input: {
  flex: 1,
  fontSize: 16,
  color: "#000",
  marginLeft: 10,
},
     filterBox:
      { width: 45,
       height: 45, marginLeft: 10,
        borderRadius: 10, 
       backgroundColor: "#EF2A39",
        justifyContent: "center", 
       alignItems: "center",
       }, 
    filterIcon: 
    { width: 20, height: 20, tintColor: "#fff", 

    }, 
    card: {
  width: 90,
  height: 45,
  backgroundColor: "#6f6767",
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 8,
  marginVertical: 33,
},

cardText: {
  color: "#fff",
  fontWeight: "bold",
},
 foodCard: {
  width: "47%",
  backgroundColor: "#fff",
  borderRadius: 15,
  padding: 10,
  alignItems: "center",
  elevation: 3,
  marginVertical: 10,
  marginHorizontal: "1.5%",
},

foodImage: {
  width: 120,
  height: 121,
  resizeMode: "contain",
},

foodName: {
  marginTop: 10,
  marginRight:40,
  fontSize: 16,
  fontWeight: "bold",
},
bottomContainer: {
  position: "absolute",
  bottom: 0,
  width: width,
  height: 90,
},

svg: {
  position: "absolute",
  bottom: 0,
},

tab: {
  position: "absolute",
  bottom: 25,
},

navIcon: {
  width: 28,
  height: 28,
  resizeMode: "contain",
  tintColor: "#fff",
},

iconRow: {
  position: "absolute",
  bottom: 20,
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
},

plusButton: {
  position: "absolute",
  alignSelf: "center",
  top: -20,

  width: 65,
  height: 65,
  borderRadius: 35,

  backgroundColor: "#fff",

  justifyContent: "center",
  alignItems: "center",

  elevation: 8,
},

plusIcon: {
  width: 30,
  height: 30,
  resizeMode: "contain",
  tintColor: "#EF2A39",
},
redBar: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: 75,
  backgroundColor: "#EF2A39",

  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
},
activeCircle: {
  position: "absolute",

  width: 60,
  height: 60,

  borderRadius: 30,

  backgroundColor: "#EF2A39",

  top: -25,

  justifyContent: "center",
  alignItems: "center",

  elevation: 10,
},

activeIcon: {
  width: 28,
  height: 28,
  resizeMode: "contain",
  tintColor: "#fff",
},




});

export default HomeScreen;