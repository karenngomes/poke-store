import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
