import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";

const Cards = ({ pizza }) => {
    return (
        <Card sx={{ maxWidth: 500, margin: "auto", borderRadius: 2 }}>
            <CardMedia
                component="img"
                height="auto"
                image={pizza.photo}
                alt={pizza.name}
                sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
            />
            <CardContent>
                <Grid container spacing={2}>
                    {/* Pizza Name */}
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="div">
                            {pizza.name}
                        </Typography>
                    </Grid>

                    {/* List of Toppings */}
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            {pizza.toppings.join(", ")}
                        </Typography>
                    </Grid>

                    {/* Price and Order Button */}
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h6" color="text.primary">
                            ${pizza.price.toFixed(2)}
                        </Typography>
                        <Button variant="contained" color="warning">
                            Order
                        </Button>
                    </Grid>

                    {/* Restaurant Info (Name and Logo) */}
                    <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={pizza.restaurant.logo}
                            alt={pizza.restaurant.name}
                            style={{ width: "30px", height: "30px", marginRight: "8px", borderRadius: "50%" }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            {pizza.restaurant.name}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Cards;
