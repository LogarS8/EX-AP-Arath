import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box>
        <Typography
          variant="h6"
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
        >
          Elaborado por: Hyunkelt Arath Rios Toledo
        </Typography>
      </Box>
    </Box>
  );
};
