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
    "https://images.unsplash.com/photo-1523381210434-271e8be1b0e7",
    "https://images.unsplash.com/photo-1523381210434-271e8be1b0e8",
    "https://images.unsplash.com/photo-1523381210434-271e8be1b0e9",
  ];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <PageContainer>
      <MainImageBox>
        <CardMedia
          component="img"
          alt="Conservación del medio ambiente"
          image="https://images.unsplash.com/photo-1523381210434-271e8be1b0e7"
          sx={{ height: 400, width: "100%", objectFit: "cover" }}
        />
      </MainImageBox>

      <CardContent>
        <Typography variant="h4" align="center" gutterBottom>
          Bienvenidos a Nuestra Plataforma Sustentable
        </Typography>

        <Divider sx={{ margin: "1.5rem 0" }} />

        <Typography variant="body1" align="center" gutterBottom>
          Descubre productos y servicios amigables con el medio ambiente que promueven la biodiversidad y la conservación de nuestros recursos naturales. Únete a nuestro compromiso con un futuro más verde.
        </Typography>

        <Divider sx={{ margin: "1.5rem 0" }} />

        <ImageList
          sx={{ width: matches ? 800 : 360, margin: "0 auto" }}
          cols={matches ? 3 : 1}
          gap={12}
        >
          {imageList.map((image) => (
            <ImageListItem key={image}>
              <CardMedia
                component="img"
                alt="Producto sustentable"
                image={image}
                sx={{ height: 200, objectFit: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
    </PageContainer>
  );
};

export default HomePage;
