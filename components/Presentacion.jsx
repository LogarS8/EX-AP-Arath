import React from "react";

import { Typography } from "./ui";
import { ProductHeroLayout } from "./ProductHeroLayout";

const backgroundImage = "/background.jpg";

export const Presentacion = () => {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
    >
      <Typography
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
        sx={{
          margin: 2,
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
        Huli Wigmen
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Descubre la cultura de los Huli Wigmen, un pueblo de Papua Nueva Guinea
      </Typography>
    </ProductHeroLayout>
  );
};
