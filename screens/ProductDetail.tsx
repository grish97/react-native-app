import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getProduct, IProduct } from "services/products";
import { CartContext } from "context/CartProvider";

interface IPropType {
  route: any;
}

export function ProductDetail({ route }: IPropType) {
  const { productId } = route.params;
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId) as IProduct);
  }, []);

  const onAddToCart = () => {
    addItemToCart(product.id);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={product.image} />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button onPress={onAddToCart} title="Add to cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
