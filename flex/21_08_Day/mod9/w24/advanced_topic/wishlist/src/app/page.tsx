import AllWishList from "@/components/AllWishList";
import Navbar from "@/components/Navbar";
import NewWishList from "@/components/NewWishList";
import { WishProvider } from "@/context/wishListContext";

export default function Home() {
  return (
    <main className="max-w-4xl min-h-screen mx-auto">
      <WishProvider>
        <Navbar />
        <NewWishList />
        <AllWishList />
      </WishProvider>
    </main>
  );
}
