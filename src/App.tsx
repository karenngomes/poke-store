import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify([]));
  }, []);

  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
        <div style={{ marginTop: "6.5rem", marginBottom: "2rem" }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
