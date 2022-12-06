import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import {
  AppAppBar,
  Categorias,
  Presentacion,
  ComoFunciona,
  QueSon,
} from "../components";
import { Footer } from "../components/ui/Footer";

const Home = () => {
  return (
    <Box>
      <Head>
        <title>Huli wigmen | Inicio</title>
      </Head>

      <AppAppBar />
      <Presentacion />
      <QueSon />
      <Categorias />
      <ComoFunciona />
      <Footer />
    </Box>
  );
};

export default Home;
