import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CartContext } from "../../context/CartProvider";

interface IPropType {}

export function Totals(props: IPropType) {
  const [total, setTotal] = useState(0);
  const { getTotalPrice } = useContext(CartContext);

  useEffect(() => {
    setTotal(getTotalPrice());
  }, []);

  return (
    <View style={styles.cartLineTotal}>
      <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
      <Text style={styles.lineRight}>$ {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
