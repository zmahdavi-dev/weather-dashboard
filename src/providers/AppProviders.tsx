import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import type { ReactNode } from "react";

import { createAppTheme } from "../theme";
import rtlCache from "../rtlCache";
import ltrCache from "../ltrCache";

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({
  children,
}: AppProvidersProps) {
  const { i18n } = useTranslation();

  const isPersian = i18n.language.startsWith("fa");

  const direction = isPersian ? "rtl" : "ltr";

  const theme = useMemo(
    () => createAppTheme(direction),
    [direction],
  );

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = isPersian ? "fa" : "en";
  }, [direction, isPersian]);

  return (
    <CacheProvider value={isPersian ? rtlCache : ltrCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}