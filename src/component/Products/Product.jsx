/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
const Product = ({ products }) => {
  const product = products[0];
  return (
    <Link className="productCard" to={product._id}>
      <img src={product.Images[0].url} alt={product.name} />
      <p>{product.name}</p>

      <div>
        <ReactStars
          value={2.5}
          isHalf={true}
          activeColor="tomato"
          edit={false}
          size={window.innerWidth < 600 ? 20 : 25}
        />
        <span>({product.numOfReviews} Reviews)</span>
      </div>
    </Link>
  );
};

export default Product;
