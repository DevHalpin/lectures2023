import NavBar from "./components/NavBar";
import NewWishList from "./components/NewWishList";
import AllWishList from "./components/AllWishList";
import { WishProvider } from "./context/wishContext";

export default function Home() {
  return (
    <main className="max-w-4xl min-h-screen mx-auto">
      <WishProvider>
        <NavBar />
        <NewWishList />
        <AllWishList />
      </WishProvider>
    </main>
  );
}
