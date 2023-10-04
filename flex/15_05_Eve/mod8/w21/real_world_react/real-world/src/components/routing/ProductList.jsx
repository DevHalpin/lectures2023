import { Link, Routes, Route, useNavigate } from "react-router-dom";
import ProductListItem from "./ProductListItem";
import { useEffect } from "react";
import { useTheme } from "../../contexts/useTheme";

const ProductList = () => {
  const navigate = useNavigate();
  const { themeToggle } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, [navigate]);
  
  return (
    <div className ={`wrapper ${themeToggle ? "dark": "light"}`}>
      <h2>This is the ProductList component</h2>
      <div>
        <Link to="1">Product #1</Link>
        <Link to="2">Product #2</Link>
        <Link to="3">Product #3</Link>
        <Link to="4">Product #4</Link>
      </div>

      <Routes>
        <Route path=":id" element={<ProductListItem />} />
      </Routes>
    </div>
  );
};
export default ProductList;
