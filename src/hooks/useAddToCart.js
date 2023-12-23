import { useEffect, useState } from "react";

export const useAddToCart = (props) => {
  const { data } = props;
  const [cart, setCart] = useState([]);
  console.log("useAddToCart----", props, "cart----", cart);

  useEffect(() => {
    if (data) {
      setCart(data);
    }
  }, [data]);

  const addToCart = (product) => {
    const isExist = cart.find((f) => f.id === product?.id);
    console.log("addToCart-product", isExist, product);

    const result = isExist
      ? cart?.map((item) => {
          if (product?.id === item.id) {
            return {
              ...item,
              inCart: true,
              count: item.counterVal,
            };
          }
          return item;
        })
      : cart?.concat({ ...product, inCart: true, count: 1 });
    console.log("addToCart-result", cart, result);
    setCart(result);
    return result;
  };

  const increaseQuantity = (id) => {
    const result = cart.map((item, o) => {
      if (id === item.id && item.inCart) {
        if (item.count > 9) {
          return item;
        } else return { ...item, count: item.count + 1 };
      } else if (id === item.id) {
        if (item.counterVal > 9) {
          return item;
        } else
          return {
            ...item,
            counterVal: item.counterVal + 1,
          };
      }
      return item;
    });
    setCart(result);
    return result;
  };

  const decreaseQuantity = (id) => {
    const result = cart.map((item) => {
      if (id === item.id && item.inCart) {
        if (item.count > 1) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      } else if (id === item.id && item.counterVal > 1) {
        return {
          ...item,
          counterVal: item.counterVal - 1,
        };
      }
      return item;
    });
    setCart(result);
    return result;
  };

  const removeFromCart = (id) => {
    const result = cart.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          count: 0,
          counterVal: 1,
          inCart: false,
        };
      }
      return item;
    });
    setCart(result);
    return result;
  };

  const cartCountTotal = cart?.reduce((acc, item) => acc + item.count, 0);
  const cartPriceTotal = cart?.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartCountTotal,
    cartPriceTotal,
  };
};
