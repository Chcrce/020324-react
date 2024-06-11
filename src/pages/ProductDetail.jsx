import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId, productName } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
    // history.push("/")
  };

  useEffect(() => {
    axios
      .get(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId
      )
      .then((res) => setProduct(res.data));
  }, [productId]);

  return (
    <div>
      <h1>Detail: {product.name}</h1>
      <button onClick={goBack}>{"<"} Geri</button>
      <hr />
      <img
        src={product?.img + "?random=" + Math.round(Math.random() * 999999999)}
      />
      <h3>{product?.name}</h3>
      <p>{product?.description}</p>
      <p>{product?.price} ₺</p>
    </div>
  );
};
