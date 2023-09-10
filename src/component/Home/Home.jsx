import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "../Products/Product";
import MetaData from "../../MetaData";

const Home = () => {
   const products =[{
    name:"Laptop",
    Images:[{url:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlf"}],
    price:50000,
    _id:"1",
    numOfReviews: "256"
   }]
      
  return (
    <div>
        <MetaData title="E-Commerce" />
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
       <Product products={products} />
       <Product products={products} />
     
      </div>
    </div>
  );
};

export default Home;
