"use client"
import { useState, useEffect, useContext } from "react";
import WishContext from "../context/wishListContext";
import Wish from "./Wish";
import EditModal from "./EditModal";


const AllWishList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const { lists, setLists} = useContext(WishContext);

    const userId = 1;

    useEffect(() => {
        const getUserWishes = async () => {
            setIsLoading(true);
            const response = await fetch(`/api/read?userId=${userId}`);
            const data = await response.json();
            if (data.error) {
                return;
            }
            setLists(data.list);
            setIsLoading(false);
        }
        getUserWishes();
    }, [userId])

    if (isLoading) return <div className="text-center p-4">Fetching data..</div>;
    return (
        <div className="mt-5 space-y-3">
            {lists && lists.length > 0 ? (
                lists.map((wish, i) => (
                    <Wish key={wish.id} wish={wish} setIsOpen={setIsOpen} index={i} />                    
                ))
            ): (
                <div className="text-center">No wishes found</div>
            )}

            <EditModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
export default AllWishList;
