import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductList from "./components/ProductList";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <h2>React Router Demo</h2>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <ProtectedRoute user={user}>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
          <Route path="/products/*" element={<ProductList />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
