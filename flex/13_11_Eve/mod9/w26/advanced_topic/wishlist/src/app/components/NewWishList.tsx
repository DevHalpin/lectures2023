"use client";

import React, { useState, useContext } from "react";
import WishContext from "../context/wishContext";

const NewWishList = () => {
    const [title, setTitle] = useState("");
    const [titleLink, setTitleLink]= useState("");
    const [isLoading, setIsLoading] = useState(false);
    const userId = 1;
    const { updateList } = useContext(WishContext);

    const handleNewWish = async () => {
        setIsLoading(true);
        const res = await fetch("/api/create", {
            method: "POST",
            body: JSON.stringify({ title, titleLink, userId }),
        });
        const data = await res.json();
        if (data.error) {
            return;
        }
        updateList(data.wishlist);
        setTitle("");
        setTitleLink("");
        setIsLoading(false);
    }

    return (
        <div className="p-3 mt-9 flex flex-col space-y-4 justify-center border-2 border-red-400">
            <div className="p-2">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 rounded-lg text-black/90"
                />
            </div>

            <div className="p-2">
                <input
                    type="text"
                    placeholder="https://"
                    value={titleLink}
                    onChange={(e) => setTitleLink(e.target.value)}
                    className="w-full p-2 rounded-lg text-black/90"
                />
            </div>
            <div className="flex justify-center">
                <button
                    disabled={isLoading}
                    className="bg-blue-400 w-fit px-7 py-2 rounded-lg disabled:bg-gray-700"
                    onClick={handleNewWish}
                    >
                        {isLoading ? "Saving..." : "Add Wish"}
                    </button>
            </div>
        </div>
    )
}

export default NewWishList;
