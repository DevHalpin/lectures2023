import { useParams } from "react-router-dom"

const ProductListItem = () => {
    const params = useParams();
    console.log(params);
    return (
      <div>
        <h2>This is the ProductListItem Component for item {params.id}</h2>
      </div>
    )
}

export default ProductListItem;