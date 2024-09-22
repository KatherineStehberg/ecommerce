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

const HomePage = () => {
  const imageList = [
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?fit=crop&w=700&q=60",
    // Agrega más imágenes según sea necesario
  ];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PageContainer>
      <MainImageBox sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <CardContent>
          <Typography variant="h3" sx={{ color: Colors.primary, mb: "2rem" }}>
            ¡Bienvenido a Productos Sustentables!
          </Typography>
          <Typography variant="h5" sx={{ color: Colors.primaryLight, mb: "1rem" }}>
            Descubre una nueva forma de consumir responsablemente.
          </Typography>
          <Typography variant="body1" sx={{ color: Colors.text }}>
            En biodiversidad.cl te ofrecemos productos que respetan el medio ambiente, 
            apoyan la economía local y promueven la sostenibilidad.
          </Typography>
        </CardContent>
        <CardMedia
          sx={{
            width: { xs: 400, md: 600 },
            height: { xs: 200, md: 300 },
            borderRadius: "8px",
            overflow: "hidden",
            marginLeft: { md: "2rem" },
          }}
          image="https://images.unsplash.com/photo-1506169894395-36397e4aaee4?fit=crop&w=700&q=60"
          title="Productos Sustentables"
        />
      </MainImageBox>
      
      <Divider sx={{ my: "2rem" }} />
      
      <Typography variant="h4" sx={{ color: Colors.primary, mb: "1rem" }}>
        Nuestros Productos Destacados
      </Typography>
      <ImageList cols={matches ? 2 : 4} gap={8}>
        {imageList.map((img, index) => (
          <ImageListItem key={index}>
            <img src={img} alt={`Producto ${index + 1}`} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </PageContainer>
  );
};

export default HomePage;
