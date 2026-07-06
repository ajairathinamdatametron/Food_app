import React from "react";
import { View, Text, FlatList, StyleSheet ,TouchableOpacity,Image} from "react-native";
import { useProfile } from "../Screens/ProfileScreen";

const OrderHistory = ({ navigation }: any) => {
  const { orders } = useProfile();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/icons/left-arrow.png")}
          style={styles.arrow}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 ,marginTop: 50}}>
        Order History
      </Text>
      <FlatList
  data={orders}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.card}>

      {/* ORDER HEADER */}
      <Text style={styles.orderId}>Order #{item.id}</Text>
      <Text style={styles.date}>
        {item.date} • {item.time}
      </Text>

      {/* ITEMS LIST */}
      {item.items?.map((food: any, index: number) => (
        <View key={index} style={styles.itemRow}>

          {/* IMAGE */}
          <Image
            source={food.image}
            style={styles.foodImage}
          />

          {/* NAME + QTY */}
          <View style={{ flex: 1 }}>
            <Text style={styles.foodName}>
              {food.name}
            </Text>

            <Text style={styles.qty}>
              Qty: {food.qty}
            </Text>
          </View>

          {/* PRICE */}
          <Text style={styles.price}>
            ₹{food.price * food.qty}
          </Text>

        </View>
      ))}

      {/* TOTAL + STATUS */}
      <View style={styles.bottomRow}>
        <Text style={styles.total}>
          Total: ₹{item.total}
        </Text>

        <Text
  style={[
    styles.status,
    {
      color: item.status === "Delivered" ? "green" : "red",
    },
  ]}
>
  {item.status}
</Text>
      </View>

    </View>
  )}
/>
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 10 },
   card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },

 

  title: { fontSize: 16, fontWeight: "bold" },

  total: {
    marginTop: 5,
    fontWeight: "bold",
    color: "#EF2A39",
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
  elevation: 6,
  },

  orderId: {
    fontWeight: "bold",
    fontSize: 15,
  },

  date: {
    color: "gray",
    marginBottom: 10,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  foodImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  foodName: {
    fontSize: 14,
    fontWeight: "600",
  },

  qty: {
    color: "gray",
    fontSize: 12,
  },

  price: {
    fontWeight: "bold",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 10,
  },

  

  status: {
    color: "green",
    fontWeight: "600",
  },
});