import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import elipse from "../../../assets/elipse.png";
import count from "../../../assets/count.png";

// Sample data
const top_restaurant = [
  {
    name: "Azmara Pizza",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: "This is the top rated restaurant and come to enjoy",
    icon: elipse,
    count: count,
  },
  {
    name: "Sabana Restaurant",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: "Amazing food with great service",
    icon: elipse,
    count: count,
  },
  {
    name: "Mamma’s Kitchen",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: "Homemade food, just like mom used to make!",
    icon: elipse,
    count: count,
  },
  {
    name: "Sunset Grill",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: "Enjoy your meal with a beautiful sunset view.",
    icon: elipse,
    count: count,
  },
];

const TopRestaurantsCard = () => {
  return (
    <Box sx={{ overflowX: "auto", whiteSpace: "nowrap", padding: "160px" ,
        background: "linear-gradient(180deg, rgba(250, 126, 0, 0) 0%, rgba(250, 126, 0, 0.2) 60.5%, rgba(148, 74, 0, 0) 100%)"

    }}>
         <Typography variant="h4" p={2} color="#00000080">Top rated Restaurants</Typography>
      {top_restaurant.map((restaurant, index) => (
        <Card
          key={index}
          sx={{
            display: "inline-block",
            width: "600px",
            marginRight: "16px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
           
          <CardContent>
            <Grid container spacing={2}>
              {/* Left Part: Logo, Name, and Description */}
              <Grid item xs={6}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "16px", py: 2 }}>
                  <img
                    src={restaurant.logo}
                    alt="logo"
                    width={50}
                    height={50}
                  />
                  <Box sx={{ maxWidth: "250px" }}>
                    <Typography variant="h6">{restaurant.name}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        whiteSpace: "normal",  // Allow the description to wrap
                        overflow: "hidden",    // Keep overflow hidden if necessary
                        wordWrap: "break-word", // Ensure words break if too long
                      }}
                    >
                      {restaurant.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* Right Part: Icon and Count */}
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "1px",
                    backgroundColor: "#0080000D",
                    py: 2,
                    m: 3,
                  }}
                >
                  <IconButton >
                    <img src={restaurant.icon} alt="icon" width={60}sx={{height:"auto"}} />
                  </IconButton>
                  <IconButton>
                    <img src={restaurant.count} alt="icon" width={60} height={'auto'}/>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TopRestaurantsCard;
