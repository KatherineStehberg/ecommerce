import { useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../features/cart/CartSlice";
import { useAuth } from "../hooks/useAuth";
import {
  Box,
  Stack,
  CardMedia,
  Typography,
  Container,
  Button,
  IconButton,
  Snackbar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

// Componente principal
const BiodiversidadPage = () => {
  const { user } = useAuth(); // Obtener usuario autenticado
  const [open, setOpen] = useState(false); // Estado para el Snackbar
  const { cart } = useSelector((state) => state.cart); // Obtener carrito del estado global
  const dispatch = useDispatch(); // Crear un dispatch para enviar acciones de Redux

  // Función para agregar productos al carrito
  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
    setOpen(true); // Mostrar el Snackbar
  };

  // Función para eliminar productos del carrito
  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
    setOpen(true); // Mostrar el Snackbar
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bienvenido a la tienda de biodiversidad
      </Typography>
      
      {/* Mostrar un mensaje de carga mientras se obtienen los productos */}
      <Loading />

      {/* Si hay un error, se muestra el componente de Error */}
      <Error />

      <Stack spacing={2}>
        {cart.length === 0 ? (
          <Typography variant="h6">
            Tu carrito está vacío. ¡Explora nuestros productos y añade tus favoritos!
          </Typography>
        ) : (
          cart.map((product) => (
            <Box key={product.id} display="flex" alignItems="center">
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ width: 100, height: 100 }}
              />
              <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
              </Box>
              <Typography variant="h6">${product.price}</Typography>
              <IconButton
                aria-label="Eliminar del carrito"
                onClick={() => handleDeleteProduct(product.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}
      </Stack>

      {/* Botón para agregar productos */}
      <Button
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        onClick={() => handleAddProduct({ id: 1, name: "Producto Ejemplo", description: "Descripción del producto", price: 100, image: "ruta-imagen" })}
        sx={{ marginTop: 2 }}
      >
        Añadir al carrito
      </Button>

      {/* Enlace a la página de checkout */}
      <Link to="/checkout">
        <Button variant="outlined" sx={{ marginTop: 2 }}>
          Ir a pagar
        </Button>
      </Link>

      {/* Snackbar para mostrar mensajes */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Producto añadido/eliminado del carrito"
      />
    </Container>
  );
};

export default BiodiversidadPage;

