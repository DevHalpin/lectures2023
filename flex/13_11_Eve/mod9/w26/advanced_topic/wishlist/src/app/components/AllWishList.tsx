"use client"
import React, {useState, useEffect, useContext } from "react";
import WishContext from "../context/wishContext";
import EditModal from "./EditModal";
import Wish from "./Wish";

const AllWishList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const {lists, setLists } = useContext(WishContext);

    const userId = 1;

    useEffect(() => {
        const fetchWishlist = async () => {
            setIsLoading(true);
            const res = await fetch(`/api/read?userId=${userId}`);
            const data = await res.json();
            if (data.error) {
                return;
            }
            setLists(data.wishlist);
            setIsLoading(false);
        }
        fetchWishlist();
    }, [userId]);

    if (isLoading) return <div className="text-center p-4">Fetching data...</div>
    return (
        <div className="mt-5 space-y-3">
            {lists && lists.length > 0 ? (
                lists.map((wish, i) => (
                    <Wish key={wish.id} wish={wish} setIsOpen={setIsOpen} index={i} />
                ))
            ): (
                <div className="text-center p-4">No wishes found</div>
            )}

            <EditModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default AllWishList;