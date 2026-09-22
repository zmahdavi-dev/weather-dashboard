import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Provider } from "react-redux";

import App from "./App";
import theme from "./theme";
import rtlCache from "./rtlCache";
import { store } from "./store/store";

import "./index.css";
import "./i18n";

document.documentElement.dir = "rtl";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  </StrictMode>,
);