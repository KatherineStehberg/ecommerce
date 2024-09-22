import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Paper, Divider } from "@mui/material";
import Login from "../components/Login";
import { PageContainer } from "../styles/page/containers";
import { Colors } from "../styles/theme/theme";

const LoginPage = () => {
  return (
    <PageContainer>
      <Paper
        elevation={3}
        sx={{ width: "20rem", margin: "0 auto", padding: "1.5rem 1rem" }}
      >
        <Typography variant="h4" mb="1rem">
          Iniciar Sesión
        </Typography>

        <Login />

        <Divider sx={{ my: "1.5rem" }} />

        <Typography variant="body2" textAlign="center">
          ¿No tienes una cuenta?
        </Typography>

        <Typography
          component={Link}
          to="/register"
          variant="body2"
          textAlign="center"
          color={Colors.primary}
          sx={{ textDecoration: "none", display: "block", mt: "0.5rem" }}
        >
          Regístrate aquí
        </Typography>
      </Paper>
    </PageContainer>
  );
};

export default LoginPage;
