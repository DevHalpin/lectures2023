"use client";

import React, { useContext } from "react";
import WishContext from "../context/wishContext";

const NavBar = () => {
    const { lists } = useContext(WishContext);
    return (
        <div className="flex justify-between border-2 border-red-400 mx-auto p-3">
            <h3 className="font-bold"> WishList</h3>
            <span>Total: {lists.length}</span>
        </div>
    )
}

export default NavBar;