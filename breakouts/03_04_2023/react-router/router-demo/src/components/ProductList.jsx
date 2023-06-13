import { Link, Routes, Route} from "react-router-dom"
import ProductListItem from "./ProductListItem"

const ProductList = () => {
  return (
    <div>
      <h2>This is the ProductList Component</h2>
      <div>
        <Link to="/products/1">Product 1</Link>
        <Link to="/products/2">Product 2</Link>
        <Link to="/products/3">Product 3</Link>
        <Link to="/products/4">Product 4</Link>
      </div>

      <Routes>
        <Route path=":id" element={<ProductListItem/>} />
      </Routes>
    </div>
  )
}

export default ProductList