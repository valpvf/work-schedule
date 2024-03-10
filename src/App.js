import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";

import { Navigation } from "./components";
import { Home, Recommend, Settings } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          // flexGrow: 1,
          // height: "100vh",
          // overflow: "auto",
        }}
      >
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="recommend" element={<Recommend />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
