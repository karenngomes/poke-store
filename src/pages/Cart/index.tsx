import React, { useEffect, useState } from "react";
import { Row, Card, Col, Button, Modal } from "react-bootstrap";
import { Pokemon } from "../../types";
import { useHistory } from "react-router-dom";

const totalPrices = (pokemon: Pokemon[] | []) => {
  let total: number = 0;
  pokemon.forEach((currentPokemon: Pokemon) => {
    total =
      total + (currentPokemon.counter_shop || 0) * (currentPokemon.price || 0);
  });
  return total;
};

function Cart() {
  const history = useHistory();
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    history.push("/");
    localStorage.setItem("pokemonList", JSON.stringify([]));
  };
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("pokemonList") || ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("pokemonList")]);

  return (
    <div>
      Cart
      {cart.length === 0 ? (
        <div>Cart Empty</div>
      ) : (
        <>
          {cart.map((pokemon: Pokemon) => (
            <Card key={pokemon.id}>
              <Row>
                <Col sm={3}>
                  <Card.Img variant="top" src={pokemon.sprites.front_default} />
                </Col>
                <Col sm={8}>
                  <Card.Body>
                    <Row>
                      <Col>{pokemon.counter_shop}x</Col>
                      <Col>{pokemon.name.toUpperCase()}</Col>
                      <Col>
                        Parcial Total:{" "}
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(
                          (pokemon.counter_shop || 0) * (pokemon.price || 0)
                        )}
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
          <Row>
            Total:{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrices(cart))}
          </Row>
          <Row>
            <Button onClick={handleShowModal}>Finish Shop</Button>
          </Row>
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>Congratulations, finished shop!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseModal}>
                Buy again
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Cart;
