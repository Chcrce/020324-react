import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product?.img + "?random=" + Math.round(Math.random() * 999999999)}
      />
      <h3>{product?.name}</h3>
      <p>{product?.description}</p>
      <p>{product?.price} ₺</p>
      <Link to={`/product-detail/${product.id}/${product.name}`}>İncele</Link>
    </div>
  );
};
