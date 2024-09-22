import React from "react";
import { Link } from "react-router-dom";
import Register from "../components/Register";
import { Container, Typography, Paper, Divider } from "@mui/material";
import { PageContainer } from "../styles/page/containers";

const RegisterPage = () => {
  return (
    <PageContainer>
      <Paper
        elevation={3}
        sx={{ width: "20rem", margin: "0 auto", padding: "1.5rem 1rem" }}
      >
        <Typography variant="h4" mb="1rem">
          Crear una Cuenta
        </Typography>
        <Typography variant="body1" mb="1rem">
          Regístrate para acceder a productos y servicios sustentables.
        </Typography>
        <Divider />
        <Register />
        <Typography variant="body2" mt="1rem">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login">Inicia sesión aquí</Link>
        </Typography>
      </Paper>
    </PageContainer>
  );
};

export default RegisterPage;
