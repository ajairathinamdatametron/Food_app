import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const FilterScreen = ({ navigation, route }: any) => {
  const [sort, setSort] = useState("");
  const [type, setType] = useState("");
  const [ratingSort, setRatingSort] = useState("");

 const applyFilter = () => {
  navigation.navigate("Home", {
    filters: {
      sort,
      type,
      ratingSort,
    },
  });
};

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Sort By Cost</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => setSort("low")}
      >
        <Text>
          {sort === "low" ? "🔘" : "⚪"} Low to High
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => setSort("high")}
      >
        <Text>
          {sort === "high" ? "🔘" : "⚪"} High to Low
        </Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Food Type</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => setType("veg")}
      >
        <Text>
          {type === "veg" ? "🔘" : "⚪"} Veg
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => setType("nonveg")}
      >
        <Text>
          {type === "nonveg" ? "🔘" : "⚪"} Non Veg
        </Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Sort By Rating</Text>

<TouchableOpacity
  style={styles.option}
  onPress={() => setRatingSort("high")}
>
  <Text>
    {ratingSort === "high" ? "🔘" : "⚪"} High to Low
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.option}
  onPress={() => setRatingSort("low")}
>
  <Text>
    {ratingSort === "low" ? "🔘" : "⚪"} Low to High
  </Text>
</TouchableOpacity>
<TouchableOpacity
  style={styles.button}
  onPress={applyFilter}
>
  <Text style={{ color: "#fff", fontWeight: "bold" }}>
    Apply Filter
  </Text>
</TouchableOpacity>

    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },

  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 10,
  },

  button: {
    marginTop: 40,
    backgroundColor: "#EF2A39",
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
  },
});