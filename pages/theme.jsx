import React, { useState } from "react";
import Head from "next/head";
import { AppAppBar } from "../components";
import Cookies from "js-cookie";
import {
  Box,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Typography } from "../components/ui";

const Theme = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    Cookies.set("theme", selectedTheme);
  };

  return (
    <Box>
      <Head>
        <title>Huli wigmen | Tema</title>
      </Head>

      <AppAppBar />

      <Box component="section" sx={{ display: "block", overflow: "hidden" }}>
        <Container
          sx={{ mt: 15, mb: 30, position: "relative" }}
        >
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            Tema
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          >
            Recarga la página para ver los cambios.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FormControl>
              <RadioGroup value={currentTheme} onChange={onThemeChange}>
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="Claro"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: "primary.main",
                    },
                  }}
                />
                <Divider sx={{ my: 1 }} />
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Oscuro"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: "primary.main",
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export const getServerSideProps = async ({ req }) => {
  const { theme = "light" } = req.cookies;
  const validThemes = ["light", "dark"];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "light",
    },
  };
};
export default Theme;
