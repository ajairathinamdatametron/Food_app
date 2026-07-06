import React, { createContext, useContext, useState } from "react";

const ProfileContext = createContext<any>(null);

export const ProfileProvider = ({ children }: any) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    cardHolder: "Dharshini",
    cardNumber: "4111 1111 1111 1111",
    expiryDate: "12/30",
    cvv: "123",
  });

  const [orders, setOrders] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  const addOrder = (order: any) => {
    setOrders((prev) => [order, ...prev]);
  };

  const toggleFavorite = (food: any) => {
    const exists = favorites.some(item => item.id === food.id);

    if (exists) {
      setFavorites(favorites.filter(item => item.id !== food.id));
    } else {
      setFavorites([...favorites, food]);
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        orders,
        addOrder,
        favorites,
        toggleFavorite,
        clearFavorites,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);