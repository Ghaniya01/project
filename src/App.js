import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Dashboard1 from "./pages/dashboard1";
import Dashboard2 from "./pages/dashboard2";
import Cards from "./pages/card";
import Register from "./pages/register";
import LogIn from "./pages/login";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme } from "./styles/theme";
import Dashboard from "./components/Dashboard";

function App() {
  const themeStyle = lightTheme;
  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dashboard1" element={<Dashboard1 />} exact />
          <Route path="/dashboard2" element={<Dashboard2 />} exact />
          <Route path="/card" element={<Cards />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<LogIn />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
