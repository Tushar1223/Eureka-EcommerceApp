import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CgMouse } from "react-icons/cg"; // Import the CgMouse icon

import { clearErrors, getProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { useHistory } from "react-router-dom"; // Changed to useHistory
import ControlledCarousel from "../layout/carousel/carousal.js";
import ProductCard from "./ProductCard.js";
import "./Home.css";

const categories = [
  { name: "Laptop", image:"https://res.cloudinary.com/dcbqek8r0/image/upload/v1726114495/l_kd86al.png" },
  { name: "Footwear", image:"https://res.cloudinary.com/dcbqek8r0/image/upload/v1726114495/f_ybylqy.png" },
  { name: "Bottom", image: "https://res.cloudinary.com/dcbqek8r0/image/upload/v1726114460/b_qcuaqb.jpg" },
  { name: "Tops", image: "https://res.cloudinary.com/dcbqek8r0/image/upload/v1726115818/DALL_E_2024-09-12_10.04.36_-_A_realistic_and_vibrant_e-commerce_category_icon_designed_in_a_modern_style_similar_to_online_shopping_apps._The_icon_should_be_square_with_rounded_e_bkvbkf.png" },
  { name: "Attire", image: "https://res.cloudinary.com/dcbqek8r0/image/upload/v1726116813/92d0559f-cae8-4031-8144-ba523dafcbdd_dr9cky.png" },
  { name: "Camera", image: "https://res.cloudinary.com/dcbqek8r0/image/upload/v1726114461/c_gofilm.jpg" },
  { name: "SmartPhones", image: "https://res.cloudinary.com/dcbqek8r0/image/upload/v1726115010/category_icons_converted_3_bnm4jr.jpg" },
];

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory(); // Use useHistory instead of useNavigate
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  const handleCategoryClick = (category) => {
    history.push(`/products?category=${category}`); // Use history.push for redirection
  };
  const scrollToCategories = () => {
    const categorySection = document.querySelector(".homeHeading");
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />
          <div className="baner">
            <ControlledCarousel />
            <button className="carousel-button" onClick={scrollToCategories}>
        Scroll <CgMouse className="scroll-icon" />
      </button>
          </div>

          <h2 className="homeHeading">Categories</h2>

          <div className="categoryContainer">
            {categories.map((category) => (
              <div
                key={category.name}
                className="categoryCard"
                onClick={() => handleCategoryClick(category.name)}
              >
                <img src={category.image} alt={category.name} />
                <p>{category.name}</p>
              </div>
            ))}
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
