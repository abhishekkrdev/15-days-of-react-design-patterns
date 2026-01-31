import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, rating, inStock } = product;

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={imageUrl} alt={name} className="product-image" />
        {!inStock && <div className="out-of-stock">Out of Stock</div>}
      </div>

      <div className="product-details">
        <h3 className="product-name">{name}</h3>

        <div className="product-rating">
          <span className="stars">{"⭐".repeat(Math.floor(rating))}</span>
          <span className="rating-value">({rating})</span>
        </div>
        <div className="product-description">
          <p>Description: This is a great product!</p>
        </div>

        <div className="product-footer">
          <span className="product-price">${price}</span>
          <button className="add-to-cart-btn" disabled={!inStock}>
            {inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
