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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const sortingOption = useSelector((state) => state.products.sortingOption);
  
  const [selectedCategory, setSelectedCategory] = useState("");

  // Maneja el cambio de categoría
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    dispatch(filterProducts(event.target.value));
  };

  // Maneja el cambio de orden de productos
  const handleSortChange = (event) => {
    dispatch(setSortingOption(event.target.value));
    dispatch(sortProducts(event.target.value));
  };

  return (
    <PageContainer>
      {/* Título de la página */}
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Productos de Biodiversidad
      </Typography>

      {/* Filtros */}
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
            <MenuItem value="price-asc">Precio: Bajo a Alto</MenuItem>
            <MenuItem value="price-desc">Precio: Alto a Bajo</MenuItem>
            <MenuItem value="name-asc">Nombre: A-Z</MenuItem>
            <MenuItem value="name-desc">Nombre: Z-A</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Productos */}
      <Products products={products} />

      {/* Botones de acción */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <ButtonGroup variant="contained" aria-label="botones de acción">
          <Button color="primary">Agregar al carrito</Button>
          <Button color="secondary">Comprar ahora</Button>
        </ButtonGroup>
      </Box>
    </PageContainer>
  );
};

export default ProductsPage;
