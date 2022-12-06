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

export const QueSon = () => {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "primary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 5 }}>
                ¿Qué es la cultura de los Huli Wigmen?
              </Typography>
              <Typography variant="h5">
                {
                  "Los Huli Wigmen son un grupo de personas que viven en la isla de Papua Nueva Guinea, en el Pacífico Sur. "
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 5 }}>
                ¿Cuál es la lengua de los Huli Wigmen?
              </Typography>
              <Typography variant="h5">
                {
                  "El idioma Huli es una lengua austronesiana, que pertenece al grupo de las lenguas de Papúa Nueva Guinea."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 5 }}>
                ¿Donde se encuentra actualmente?
              </Typography>
              <Typography variant="h5">
                {
                  "La cultura Huli Wigmen se encuentra en la provincia de Enga, en la región de la Cordillera Central de Papúa Nueva Guinea."
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
