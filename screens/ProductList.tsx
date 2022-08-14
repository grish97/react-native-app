import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, ListRenderItem } from "react-native";
import { getProducts, IProduct } from "services/products";
import { Product } from "components/Product";

interface IPropType {
  navigation: any;
}

export function ProductList({ navigation }: IPropType) {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const renderProducts = ({ item, index }: any) => (
    <Product
      product={item}
      onPress={() => {
        navigation.navigate("ProductDetails", { productId: item.id });
      }}
    />
  );

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProducts}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
