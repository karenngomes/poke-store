import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Pokemon, Store } from "./types";

// @ts-ignore
export const AppContext = React.createContext<Store>({});

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [pokemonShop, setPokemonShop] = useState<Pokemon[]>([]);

  const store = {
    totalPrice: { get: totalPrice, set: setTotalPrice },
    pokemonShop: { get: pokemonShop, set: setPokemonShop },
  };

  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify([]));
  }, []);

  return (
    <BrowserRouter>
      <AppContext.Provider value={store}>
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
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
