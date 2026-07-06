import React from "react";
import { useProfile } from "../Screens/ProfileScreen";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


const FavoriteScreen = ({ navigation }: any) => {
  const { favorites, toggleFavorite } = useProfile();

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigation.navigate("Home")}>
  <Image
    source={require("../assets/icons/left-arrow.png")}
    style={styles.arrow}
  />
</TouchableOpacity>
      <Text style={styles.title}>My Favorites</Text>

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No favorite items yet ❤️
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.foodCard}
              onPress={() => navigation.navigate(item.screen)}
            >
              <TouchableOpacity
                style={styles.heart}
                onPress={() => toggleFavorite(item)}
              >
                <Image
                  source={require("../assets/icons/heartfilled.png")}
                  style={styles.heartIcon}
                />
              </TouchableOpacity>

              <Image source={item.image} style={styles.foodImage} />

              <Text style={styles.foodName}>{item.name}</Text>

              <Text style={styles.shop}>{item.shop}</Text>

              <View style={styles.ratingRow}>
                <Image
                  source={require("../assets/icons/star.png")}
                  style={styles.star}
                />
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: 18,
    color: "gray",
  },

  foodCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 15,
    padding: 10,
    elevation: 3,
    alignItems: "center",
  },arrow:{
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

  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },

  heartIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  foodImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  shop: {
    color: "gray",
    marginTop: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  star: {
    width: 16,
    height: 16,
    marginRight: 5,
  },

  rating: {
    fontWeight: "bold",
  },
});