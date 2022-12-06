import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { AppBar, Toolbar } from "./ui";
import { ButtonMode } from "./ButtonMode";

export const AppAppBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            href="/"
            variant="h6"
            underline="none"
            color="inherit"
            sx={{ fontSize: 24 }}
          >
            Cultura: <i>Huli Wigmen</i>
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }} />
          <ButtonMode />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
