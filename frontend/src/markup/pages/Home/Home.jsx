import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Grid
} from "@mui/material";
import image from "../../../assets/imagehero.png";
import flower from "../../../assets/imageflower.png";
import SearchIcon from "@mui/icons-material/Search";
import Hero from "../../components/Hero/Hero";
import PizzaRender from "../../components/Cards/PizzaRender";
import TopRestaurantsCard from "../../components/Cards/ToprestaurantsCard";

const Home = () => {
  return (
    <>
 <Box
  sx={{
    width: "100%",
    textAlign: "center",
    background: "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1 100%)",
    padding: 4,
  }}
>
  <Grid container spacing={3} alignItems="center">
    {/* First larger box - Left side (Text and first image in a row) */}
    <Grid container item xs={12} sm={8} alignItems="center">
      {/* Text and Search section (90% of this section) */}
      <Grid item xs={9}>
        <Box
          sx={{
            padding: { xs: 2, sm: 4 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="h2"
            color="inherit"
            mb={2}
            sx={{ color: "orange" }}
          >
            Order Us
          </Typography>
          <Typography variant="body1" color="inherit" mb={2}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>

          {/* Flex container for TextField and Button */}
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              borderRadius: "25px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "40px",
                backgroundColor: "white",
                py: 2,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      borderRadius: "25px",
                      padding: "6px 16px",
                      backgroundColor: "orange",
                      "&:hover": {
                        backgroundColor: "darkorange",
                      },
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Grid>

      {/* First smaller image (10% of this section) */}
      <Grid item xs={3}>
        <Box
          sx={{
            position: "relative",  
            top: "-80px",          
            right: "-40px",        
          }}
        >
          <img src={flower} alt="flower" style={{ width: "100%" }} />
        </Box>
      </Grid>
    </Grid>

    {/* Last image taking 50% of the overall width */}
    <Grid item xs={12} sm={4}>
      <Box>
        <img
          src={image}
          alt="hero"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Grid>
  </Grid>
</Box>



      <Hero />
      <TopRestaurantsCard/>

      <PizzaRender />
      

    </>
  );
};

export default Home;
