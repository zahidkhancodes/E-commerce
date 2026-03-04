
function ProductCard({ product , addToCart}) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button className="btn-primary"
        onClick={addToCart}
        >
          Add to Cart </button>
    </div>
  );
}


export default ProductCard;