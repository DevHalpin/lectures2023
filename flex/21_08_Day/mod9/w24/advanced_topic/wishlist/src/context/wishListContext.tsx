"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

type Wish = {
  id: number;
  title: string;
  link: string;
};

interface IWishContext {
  lists: Wish[];
  setLists: Dispatch<SetStateAction<Wish[]>>;
  updateList: (newList: Wish) => void;
  deleteFromList: (id: number) => void;
  wish: Wish;
  setWish: Dispatch<SetStateAction<Wish>>;
}

const WishContext = createContext({} as IWishContext);

export function WishProvider({ children }: any) {
  const [lists, setLists] = useState<Wish[]>([]);
  const [wish, setWish] = useState({id: 1, title: "", link: ""});

  const updateList = (newList: Wish) => {
    let cleanedList = lists.filter((list) => list.id !== newList.id);
    setLists([newList, ...cleanedList]);
  };

  const deleteFromList = (id: number) => {
    setLists((list) => list.filter((l) => l.id !== id));
  };

  return (
    <WishContext.Provider
      value={{ lists, setLists, updateList, deleteFromList, wish, setWish }}
    >
      {children}
    </WishContext.Provider>
  );
}
export default WishContext;
