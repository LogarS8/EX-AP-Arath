import React from "react";
import Head from "next/head";
import { AppAppBar, NavSearch } from "../components";
import { Box, CardMedia } from "@mui/material";
import { Typography } from "../components/ui";
import { Divider } from "@material-ui/core";
import { useData } from "../hooks/useData";
import { Footer } from "../components/ui/Footer";

const Caracteristicas = () => {
  const { data, isLoading } = useData("/caracteristicas"),
    { locacion, lengua, pueblos, comidas, vestimentas } = data;
  return (
    <Box>
      <Head>
        <title>Huli wigmen | Características</title>
      </Head>

      <AppAppBar />

      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <NavSearch />
        <Typography
          variant="h4"
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
        >
          Características
        </Typography>
      </Box>
      {!isLoading ? (
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            Locación
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            {locacion.inf}
          </Typography>
          <Divider />
          <br />
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            Lengua
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            {lengua}
          </Typography>
          <Divider />
          <br />
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            Pueblos
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            {pueblos.nombre}
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            {pueblos.ubicacion}
          </Typography>
          <Divider />
          <br />
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            Comidas
          </Typography>
          {comidas.map((comida, index) => (
            <Box key={index}>
              <Typography
                variant="body1"
                sx={{ display: "flex", justifyContent: "center", mb: 2 }}
              >
                {comida.nombre}
              </Typography>

              <CardMedia
                component="img"
                image={comida.img}
                alt="green iguana"
                sx={{
                  width: { xs: "100%", sm: "500px" },
                  margin: "auto",
                  height: { xs: "350px", sm: "700px" },
                }}
              />
              <br />
            </Box>
          ))}
          <Divider />
          <br />
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            Vestimentas
          </Typography>
          {vestimentas.map((vestimenta, index) => (
            <Box key={index}>
              <Typography
                variant="body1"
                sx={{ display: "flex", justifyContent: "center", mb: 2 }}
              >
                {vestimenta.prenda}
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", justifyContent: "center", mb: 2 }}
              >
                {vestimenta.inf}
              </Typography>
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", sm: "500px" },
                  margin: "auto",
                  height: { xs: "100%", sm: "700px" },
                }}
                image={vestimenta.img}
                alt="green iguana"
              />
              <br />
            </Box>
          ))}
        </Box>
      ) : null}
      <Footer />
    </Box>
  );
};

export default Caracteristicas;
