import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import queryString from "query-string"; // Ensure query-string is installed

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Products = ({ match, location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 55000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [filterVisible, setFilterVisible] = useState(false); // Maintain filter visibility state

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  // Parse category from URL parameters using query-string
  const { category: categoryFromURL } = queryString.parse(location.search);

  // Ensure the category from URL is set before fetching products
  useEffect(() => {
    if (categoryFromURL) {
      setCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  let count = filteredProductsCount;

  // Only fetch products after category is set from the URL
  useEffect(() => {
    if (category !== "" || !categoryFromURL) {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
      dispatch(getProduct(keyword, currentPage, price, category, ratings));
    }
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error, categoryFromURL]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const filterBox = document.querySelector(".filterBox");
      const filterButton = document.querySelector(".filterButton");

      // Check if the click is outside the filter box and not on the button
      if (
        filterVisible &&
        !filterBox.contains(event.target) &&
        !filterButton.contains(event.target)
      ) {
        setFilterVisible(false);
      }
    };

    if (filterVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterVisible]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          {/* Filter Button */}
          <button
            className="filterButton"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            {filterVisible ? "Hide Filter" : "Show Filter"}
          </button>

          {/* Filter Section */}
          <div className={`filterBox ${filterVisible ? "showFilter" : ""}`}>
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={55000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => setRatings(newRating)}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>

          {/* Blur the product background when the filter is open */}
          <div className={`products ${filterVisible ? "blurBackground" : ""}`}>
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
