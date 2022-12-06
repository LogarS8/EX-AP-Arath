import React, { useState } from "react";
import Head from "next/head";
import { AppAppBar, CardR, NavSearch } from "../components";
import { Box, Grid } from "@mui/material";
import { Typography } from "../components/ui";
import { Divider } from "@material-ui/core";
import { useData } from "../hooks/useData";
import { Footer } from "../components/ui/Footer";

const Relatos = () => {
  const { data, isLoading } = useData("/relatos");
  const [search, setSearch] = useState("");

  return (
    <>
      <Head>
        <title>Huli wigmen | Relatos</title>
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
          Relatos
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <label htmlFor="search">Buscar: &nbsp;</label>

          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "50%",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              padding: "10px",
              margin: "10px",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#d5d5d5",
            }}
          />
        </Box>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Box>
        <Grid container spacing={2}>
          {isLoading ? (
            <></>
          ) : (
            data
              .filter(
                (item) =>
                  item.titulo.toLowerCase().includes(search.toLowerCase()) ||
                  item.tipo.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => (
                <CardR
                  titulo={item.titulo}
                  contenido={item.contenido}
                  img={item.img}
                  tipo={item.tipo}
                  key={index}
                />
              ))
          )}
        </Grid>
      </Box>
        <Footer/>
    </>
  );
};

export default Relatos;
