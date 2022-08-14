import React, { useEffect, useContext } from "react";
import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import { CartContext, IItem } from "context/CartProvider";
import { Totals } from "screens/Cart/Totals";

interface IPropType {
  navigation: any;
}

export function Cart(props: IPropType) {
  const { items } = useContext(CartContext);

  const renderItem = ({ item }: { item: IItem }) => (
    <View style={styles.cartLine}>
      <Text style={styles.lineLeft}>
        {item.product.name} x {item.qty}
      </Text>
      <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
