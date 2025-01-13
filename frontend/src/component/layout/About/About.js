import React from "react";
import "./aboutSection.css";
import { Button, Typography  } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "https://instagram.com/meabhisingh";
  // };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            {/* <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            /> */}
            {/* <Typography>Abhishek Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
            <span>
            This is a online shopping platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides
users with a seamless and secure shopping experience, offering features like user registration, product catalog, shopping cart, secure checkout,
and more. With a responsive design and optimized performance, this website ensures a smooth shopping experience across devices. This is an
ideal solution for businesses looking to establish a online presence and cater to their customers' needs effectively.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <a
              href="https://github.com/Tushar1223"
              target="blank"
            >
              <GitHubIcon className="instagramSvgIcon" />
            </a>

            <a href="https://www.instagram.com/kingts_003/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
