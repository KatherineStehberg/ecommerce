import React from "react";
import { Link } from "react-router-dom";
import { PageContainer, MainImageBox } from "../styles/page/containers";
import { Typography, CardMedia, Box } from "@mui/material";
import { Colors } from "../styles/theme/theme";
import { MyButton } from "../styles/buttons/buttons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ErrorPage = () => {
  return (
    <PageContainer>
      <MainImageBox sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ maxWidth: "30rem" }}>
          <Typography
            variant="h4"
            sx={{ color: Colors.primaryDark, mb: "2rem" }}
          >
            En construcción...
          </Typography>
          <Typography variant="h6" sx={{ mb: { xs: "2rem" } }}>
            Nuestro emocionante nuevo sitio web se lanzará pronto. Vuelve a
            visitarnos y échale un vistazo.
          </Typography>
          <Link to={"/"}>
            <MyButton
              variant="contained"
              startIcon={<ArrowBackIcon />}
              sx={{ marginTop: "1rem" }}
            >
              Volver a Inicio
            </MyButton>
          </Link>
        </Box>
        <CardMedia
          sx={{
            width: { xs: 400, md: 500 },
            height: { xs: 400, md: 450 },
          }}
          image="/images/Working.png"
          title="Estamos trabajando en el sitio"
        />
      </MainImageBox>
    </PageContainer>
  );
};

export default ErrorPage;
