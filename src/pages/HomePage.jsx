import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {
  Typography,
  CardMedia,
  ImageList,
  ImageListItem,
  Divider,
  CardContent,
} from "@mui/material";
import { Colors } from "../styles/theme/theme";
import { PageContainer, MainImageBox } from "../styles/page/containers";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MyButton } from "../styles/buttons/buttons";

const HomePage = () => {
  const imageList = [
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?fit=crop&w=700&q=60",
    // Agrega más imágenes según sea necesario
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer>
      <MainImageBox sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <CardContent>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Bienvenido a Nuestra Página
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1">
            Explora nuestros productos y servicios para la biodiversidad.
          </Typography>
          <Link to="/productos">
            <MyButton
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 2 }}
            >
              Ver Productos
            </MyButton>
          </Link>
        </CardContent>
        <ImageList sx={{ width: isMobile ? "100%" : "50%", height: "auto" }}>
          {imageList.map((image) => (
            <ImageListItem key={image}>
              <CardMedia
                component="img"
                src={image}
                alt="Imagen relacionada"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </MainImageBox>
    </PageContainer>
  );
};

export default HomePage;
