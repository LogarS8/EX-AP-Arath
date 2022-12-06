import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "./ui";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

export const ComoFunciona = () => {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "primary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          Como funciona la App
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Typography variant="h5" align="center">
                  Seleciona una de las 3 opcciones de busqueda de la App
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Typography variant="h5" align="center">
                  Ingresa la informacion especifica que estas buscado
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Typography variant="h5" align="center">
                  Recibe la informacion que estas buscando
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
};
