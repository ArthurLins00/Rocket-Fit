import { createContext, useContext, useState } from "react";
import type { Product } from "../types";

interface FavoriteContextType {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);

  function toggleFavorite(product: Product) {
    setFavorites((prev) => {
        const exists = prev.find((p) => p.id === product.id);
        return exists
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product];
    });
}

  function isFavorite(productId: number) {
    return favorites.some((p) => p.id === productId);
  }

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
}
