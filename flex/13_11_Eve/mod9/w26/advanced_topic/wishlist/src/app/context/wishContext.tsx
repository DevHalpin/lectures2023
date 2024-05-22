"use client";

import React, { createContext, useState, Dispatch, SetStateAction } from "react";

type Wish = {
    id: number;
    title: string;
    link: string;
}

interface IWishContext {
    lists: Wish[];
    setLists: Dispatch<SetStateAction<Wish[]>>;
    updateList: (newList: Wish) => void;
    deleteFromList: (id: number) => void;
    wish: Wish;
    setWish: Dispatch<SetStateAction<Wish>>;
}

const WishContext = createContext({} as IWishContext);

export function WishProvider({ children}: { children: React.ReactNode }) {
    const [lists, setLists] = useState<Wish[]>([]);
    const [wish, setWish] = useState<Wish>({ id: 0, title: "", link: "" });

    const updateList = (newList: Wish) => {
        let cleanedList = lists.filter(list => list.id !== newList.id);
        setLists([...cleanedList, newList]);
    };

    const deleteFromList = (id: number) => {
        setLists((prev) => prev.filter((list) => list.id !== id));
    }

    return (
        <WishContext.Provider value={{ lists, setLists, updateList, deleteFromList, wish, setWish}}>
            {children}
        </WishContext.Provider>
    )
}

export default WishContext;