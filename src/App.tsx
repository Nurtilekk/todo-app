import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import HomePage from "src/pages/HomePage";
import Header from "./components/containers/Header";
import TodosPage from "./pages/TodoPage";
import GlobalStyle from "./styles/GlobalStyles";

const theme = {
  colors: {
    primary: "#D52047",
    white: "#fff",
    dark: "#000",
    danger: "#EE3D1B",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route component={HomePage} exact path="/"></Route>
          <Route component={TodosPage} path="/todos"></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
