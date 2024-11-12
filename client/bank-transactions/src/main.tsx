import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import "./index.css";

import { ColorModeProvider } from "./context/theme/theme-provider.tsx";
import { FilterProvider } from "./context/filter/filter-provider.tsx";

import Layout from "./layouts/dashboard/layout.tsx";
import HomePage from "./pages/home.tsx";

import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorModeProvider>
      <FilterProvider>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SnackbarProvider>
        </QueryClientProvider>
      </FilterProvider>
    </ColorModeProvider>
  </StrictMode>
);
