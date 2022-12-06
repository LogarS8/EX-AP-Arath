import { Box, Link, Divider, Button, ButtonGroup } from "@mui/material";
import { Typography } from "./ui";
import React from "react";

export const NavSearch = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "secondary.light",
        margin: "5px",
        mb: "2rem",
      }}
    >
      <ButtonGroup variant="text" size={"large"} aria-label="text button group">
        <Button href="/caracteristicas">Características</Button>
        <Button href="/edificaciones">Edificaciones</Button>
        <Button href="/relatos">Relatos</Button>
      </ButtonGroup>
    </Box>
  );
};
