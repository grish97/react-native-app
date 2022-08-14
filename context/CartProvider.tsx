import React, { createContext, useState } from "react";
import { getProduct, IProduct } from "services/products";

export interface IItem {
  id: number;
  qty: number;
  product: IProduct;
  totalPrice: number;
}

interface IPropType {
  children?: React.ReactNode;
}

export interface IContext {
  items: IItem[];
  setItems: (items: IItem[]) => void;
  getItemsCount: () => number;
  addItemToCart: (id: number) => void;
  getTotalPrice: () => number;
}

export const CartContext = createContext({} as IContext);

export function CartProvider(props: IPropType) {
  const [items, setItems] = useState<IItem[]>([]);

  const addItemToCart = (id: number) => {
    const product = getProduct(id);

    if (!product) {
      return;
    }

    setItems((prevState) => {
      const item = items.find((item) => item.id === id);

      if (!item) {
        return [
          ...items,
          {
            id,
            product,
            qty: 1,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevState.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  };

  const getItemsCount = () => {
    return items.reduce((sum, item) => sum + item.qty, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
