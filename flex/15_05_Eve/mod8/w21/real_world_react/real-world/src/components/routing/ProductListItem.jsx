import { useParams } from "react-router-dom";
import { useTheme } from "../../contexts/useTheme";

const ProductListItem = () => {
  const params = useParams();
  const { themeToggle } = useTheme();

  console.log(params)

  return (
    <div className ={`wrapper ${themeToggle ? "dark": "light"}`}>
      <h2>This is the Product component for Product: {params.id}</h2>
    </div>
  )
}

export default ProductListItem