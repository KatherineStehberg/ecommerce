import React from "react";
import Products from "../components/Products";
import {
  Typography,
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { Colors } from "../styles/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  sortProducts,
  setSortingOption,
} from "../features/products/ProductsSlice";
import { PageContainer } from "../styles/page/containers";

import { useState, useEffect } from "react";

const ProductsPage = () => {
  const filterButtons = [
    "Todos",
    "Ropa de Hombre",
    "Ropa de Mujer",
    "Joyería",
    "Electrónica",
  ];
  const sortingOptions = [
    "Mejor Valorados",
    "Precio (Alto a Bajo)",
    "Precio (Bajo a Alto)",
  ];
  const [sortingValue, setSortingValue] = useState("Mejor Valorados");
  const dispatch = useDispatch();
  const { filteredProducts, sortingOption } = useSelector(
    (state) => state.products
  );
  const products = useSelector((state) => state.products.items);
  const sortingOption = useSelector((state) => state.products.sortingOption);
  
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    setSortingValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    dispatch(filterProducts(event.target.value));
  };

  useEffect(() => {
    dispatch(setSortingOption(sortingValue));
    dispatch(sortProducts());
  }, [filteredProducts, sortingOption, sortingValue]);

  useEffect(() => {
    dispatch(setSortingOption("Mejor Valorados"));
  }, []);

  const handleSortChange = (event) => {
    dispatch(setSortingOption(event.target.value));
    dispatch(sortProducts(event.target.value));
  };

  return (
    <PageContainer>
      <Typography variant="h4" sx={{ textAlign: "center", mb: "2rem" }}>
        Comprar por categoría
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Productos de Biodiversidad
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <ButtonGroup
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          color="primary"
          aria-label="grupo de botones secundarios"
        >
          {filterButtons.map((button, key) => (
            <Button
              variant="contained"
              sx={{ margin: ".5rem" }}
              onClick={() => dispatch(filterProducts(button.toLowerCase()))}
              key={key}
              aria-label={button}
            >
              {button}
            </Button>
          ))}
        </ButtonGroup>
        <FormControl
          sx={{ width: "13rem", margin: { xs: ".5rem" } }}
          size="small"
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <InputLabel>Categoría</InputLabel>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                label="Categoría"
              >
                <MenuItem value="">
                  <em>Todos los productos</em>
                </MenuItem>
                <MenuItem value="plantas">Plantas</MenuItem>
                <MenuItem value="animales">Animales</MenuItem>
                <MenuItem value="ecosistemas">Ecosistemas</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <InputLabel>Ordenar por</InputLabel>
              <Select
                value={sortingOption}
                onChange={handleSortChange}
                label="Ordenar por"
              >
                {sortingOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </FormControl>
      </Box>
      <Products />
    </PageContainer>
  );
};

export default ProductsPage;

