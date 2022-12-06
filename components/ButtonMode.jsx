import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import { useRouter } from "next/router";
import { Brightness6Outlined } from "@mui/icons-material";

export const ButtonMode = () => {
  const router = useRouter();
  const navigateTo = (url) => router.push(url).then();

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        bgcolor: { light: "background.paper", dark: "background.default" },
        color: { light: "text.primary", dark: "text.secondary" },
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => {
          navigateTo("/theme");
        }}
        color="inherit"
      >
        <Brightness6Outlined />
      </IconButton>
    </Box>
  );
};
