import React, { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../styles/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";
import Cookies from "js-cookie";

const MyApp = ({ Component, pageProps, theme = "light" }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    const selectedTheme = cookieTheme === "light" ? lightTheme : darkTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()),
      }}
    >
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
};

export default MyApp;
