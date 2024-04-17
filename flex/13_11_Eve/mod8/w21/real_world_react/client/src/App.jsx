import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import { SystemProvider } from "./contexts/systemContext";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <SystemProvider>
          <Outlet />
        </ SystemProvider>
      </UserProvider>
    </>
  );
}

export default App;
