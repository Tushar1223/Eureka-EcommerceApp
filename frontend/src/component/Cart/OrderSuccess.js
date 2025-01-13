import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import  {useEffect} from "react";
import { useHistory } from 'react-router-dom';


const OrderSuccess = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.location.reload();
    });
    return () => {
      unlisten();
    };
  }, [history]);


  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
      {/* <Link to="/">Home</Link> */}

    </div>
  );
};

export default OrderSuccess;
