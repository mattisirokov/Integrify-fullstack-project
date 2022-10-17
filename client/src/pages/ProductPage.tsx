import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "redux/slices/productsSlice";
import { AppDispatch, RootState } from "redux/store";
import AdvancedNavbar from "../components/AdvancedNavbar";

const ProductPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state);
 

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div>
      <AdvancedNavbar />

      <Box m={2} pt={3}>
        <Grid container spacing={2}>
          {products.allproducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {product.category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductPage;
