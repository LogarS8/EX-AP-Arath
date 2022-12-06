import React, { useState } from "react";
import Head from "next/head";
import { AppAppBar, CardE, NavSearch } from "../components";
import { useData } from "../hooks/useData";
import { Box, Grid } from "@mui/material";
import { Typography } from "../components/ui";
import { Divider } from "@material-ui/core";
import { Footer } from "../components/ui/Footer";

const Edificaciones = () => {
  const { data, isLoading } = useData("/edificaciones");
  const [search, setSearch] = useState("");
  return (
    <Box>
      <Head>
        <title>Huli wigmen | Edificaciones</title>
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
          Edificaciones
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
                  item.inf.toLowerCase().includes(search.toLowerCase()) ||
                  item.nombre.toLowerCase().includes(search.toLowerCase()) ||
                  item.pueblo.toLowerCase().includes(search.toLowerCase()) ||
                  item.caracteristicas
                    .toLowerCase()
                    .includes(search.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <CardE
                      inf={item.inf}
                      nombre={item.nombre}
                      img={item.img}
                      pueblo={item.pueblo}
                      caracteristicas={item.caracteristicas}
                    />
                  </Grid>
                );
              })
          )}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Edificaciones;
