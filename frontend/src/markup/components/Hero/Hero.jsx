import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Slider from "react-slick";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import "slick-carousel/slick/slick.css"; // Add this line
import "slick-carousel/slick/slick-theme.css"; // Add this line

// Carousel settings for react-slick
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const Hero = () => {
  return (
    <div sx={{ mx: "auto", backgroundColor: "#FFF8F1"}}>
      <Box
        sx={{
          width: "100%",
          height: "706px",
          overflow: "hidden",
          // background: #FFF8F1;

          marginRight: "20px",
          marginLeft: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", margin: "20px 0", color: "#00000080" }}
        >
          Featured Pizza
        </Typography>
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <Box
            sx={{ height: "386px", borderRadius: "60px", overflow: "hidden" }}
          >
            <Grid container sx={{ height: "100%" }}>
              {/* Text Box on the Left (70%) */}
              <Box sx={{ backgroundColor: "#4d4d4d", display: "flex" }}>
                <Grid
                  item
                  xs={8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start", // Adjusted to move text up
                    alignItems: "flex-start",
                    // Dark background for the text box
                    color: "white",
                    textAlign: "left",
                    padding: 4,
                    borderRadius: "40px",
                  }}
                >
                  <Typography variant="h3">Make Your First Order</Typography>
                  <Typography variant="h4" sx={{ mb: 2, color: "orange" }}>
                    50% Off
                  </Typography>
                  <Typography sx={{ mb: 3 }}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "orange",
                      color: "white",
                      "&:hover": { backgroundColor: "darkorange" },
                    }}
                  >
                    Order Now
                  </Button>
                </Grid>

                {/* Image Box on the Right (30%) */}
                <Grid item xs={4}>
                  <img
                    src={banner2}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </Box>
            </Grid>
          </Box>

          {/* Slide 2 */}
          <Box
            sx={{
              backgroundColor: "#50482B",
              height: "386px",
              borderRadius: "40px",
              overflow: "hidden",
            }}
          >
            <Grid container sx={{ height: "100%" }}>
              {/* Text Box on the Left (70%) */}
              <Box sx={{ display: "flex" }}>
                <Grid
                  item
                  xs={8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start", // Adjusted to move text up
                    alignItems: "flex-start",
                    // backgroundColor: "#4d4d4d",
                    color: "white",
                    textAlign: "left",
                    padding: 4,
                  }}
                >
                  <Typography variant="h3">Fast and Reliable</Typography>
                  <Typography variant="h4" sx={{ mb: 2, color: "orange" }}>
                    Get connected with trusted service providers instantly
                  </Typography>
                  <Typography sx={{ mb: 3 }}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "orange",
                      color: "white",
                      "&:hover": { backgroundColor: "darkorange" },
                    }}
                  >
                    Order Now
                  </Button>
                </Grid>

                {/* Image Box on the Right (30%) */}
                <Grid item xs={4}>
                  <img
                    src={banner1}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </Box>
            </Grid>
          </Box>

          {/* Slide 3 */}
          <Box
            sx={{
              backgroundColor: "#296D60",
              height: "386px",
              borderRadius: "40px",
              overflow: "hidden",
            }}
          >
            <Grid container sx={{ height: "100%" }}>
              {/* Text Box on the Left (70%) */}
              <Box sx={{ backgroundColor: "#296D60", display: "flex" }}>
                <Grid
                  item
                  xs={8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start", // Adjusted to move text up
                    alignItems: "flex-start",
                    // backgroundColor: "#4d4d4d",
                    color: "white",
                    textAlign: "left",
                    padding: 4,
                  }}
                >
                  <Typography variant="h3">Quality Assurance</Typography>
                  <Typography variant="h4" sx={{ mb: 2, color: "orange" }}>
                    We ensure top-notch quality in all services provided
                  </Typography>
                  <Typography sx={{ mb: 3 }}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "orange",
                      color: "white",
                      "&:hover": { backgroundColor: "darkorange" },
                    }}
                  >
                    Order Now
                  </Button>
                </Grid>

                {/* Image Box on the Right (30%) */}
                <Grid item xs={4}>
                  <img
                    src={banner3}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Slider>
      </Box>
    </div>
  );
};

export default Hero;
