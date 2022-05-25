import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Cards from "./pages/card";
import Register from "./pages/register";
import LogIn from "./pages/login";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme } from "./styles/theme";
import Dashboard from "./components/Dashboard";
import DashboardA from "./components/Dashboard_Admin";
import DashboardP from "./components/Dashboard_Parent";

function App() {
  const themeStyle = lightTheme;
  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/card" element={<Cards />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<LogIn />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/dashboardadmin" element={<DashboardA />} exact />
          <Route path="/dashboardparent" element={<DashboardP />} exact />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
