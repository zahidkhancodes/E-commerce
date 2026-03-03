import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";


function ProductGrid(ele) {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <h2 className="page-title">Featured Products</h2>
      )}

      {location.pathname === "/products" && (
        <h2 className="page-title">All Products</h2>
      )}

      <div className="product-grid">
        {ele.prod.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductGrid;