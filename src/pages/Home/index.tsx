import React, { useEffect, useState } from "react";
import { Spinner, Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Pokemon } from "../../types";

import "./styles.scss";

function Home() {
  const [data, setData] = useState<Pokemon[]>([]);

  async function fetchData() {
    try {
      let pokemon: Pokemon[] = [];
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10"
      );
      const { results } = data;

      if (results.length) {
        for (let i = 0; i < results.length; i++) {
          const { data } = await axios.get(results[i].url);
          pokemon.push({ ...data, price: 45.5, counter_shop: 0 });
        }
        setData(pokemon);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleClickPlus(pokemon: Pokemon) {
    const newData = data.map((currentPoke) => {
      if (currentPoke.id === pokemon.id) {
        let pokemonList = JSON.parse(localStorage.getItem("pokemonList") || "");
        const updatedPokemon = {
          ...currentPoke,
          counter_shop:
            currentPoke.counter_shop === undefined
              ? 0
              : currentPoke.counter_shop + 1,
        };
        const index = pokemonList.findIndex(
          (item: Pokemon) => item.id === pokemon.id
        );
        if (index === -1) {
          localStorage.setItem(
            "pokemonList",
            JSON.stringify([...pokemonList, updatedPokemon])
          );
        } else {
          const newPokemonList = pokemonList.map((currentPokeList: Pokemon) => {
            if (currentPokeList.id === pokemon.id) {
              return updatedPokemon;
            } else {
              return currentPokeList;
            }
          });
          localStorage.setItem("pokemonList", JSON.stringify(newPokemonList));
        }
        return updatedPokemon;
      } else {
        return currentPoke;
      }
    });
    setData(newData);
  }

  return data.length === 0 ? (
    <div className="divSpinner">
      <Spinner animation="border" variant="warning" />
    </div>
  ) : (
    <div>
      <Row>
        {data.map((pokemon) => (
          <Col sm={4}>
            <Card key={pokemon.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pokemon.sprites.front_default} />
              <Card.Body>
                <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleClickPlus(pokemon);
                  }}
                >
                  +
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
