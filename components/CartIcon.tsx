import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartContext } from "../context/CartProvider";

interface IPropType {
  navigation: any;
}

export function CartIcon({ navigation }: IPropType) {
  const { getItemsCount } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Cart {getItemsCount()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    height: 38,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 8,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
