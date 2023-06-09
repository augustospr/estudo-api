import React, { useEffect } from "react";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import Cabecalho from "../components/cabecalho/Cabecalho";
import PesquisaPokemon from "../components/pesquisaPokemon/PesquisaPokemon";
// import Paginacao from "../components/paginacao/Paginacao";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

export default function Home() {

  // const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch(url);
  //     const json = await data.json();
  //     return json;
  //   }
  //   const result = fetchData()
  //     .catch(console.error);;
  //   setData(result);
  // }, []);

  // console.log(data);

  const [data, setData] = useState([]);

  const [filter, setFilter] = useState("");

  
  const pokemonFilter = (nome) => {
    setFilter(nome);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const endpoints = [];
      for (var i = 1; i <= 51; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      };
      await Promise.all(endpoints.map((endpoint) => fetch(endpoint)))
        .then((res) => Promise.all(res.map(async r => r.json())))
        .then((res) => {
          setData(res);
        });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Container sx={{ paddingBottom: 5 }}>
        <Grid container spacing={2}>
          <Cabecalho />
          <PesquisaPokemon pokemonFilter={pokemonFilter} />

          {data.filter(pokemon => pokemon.name.includes(filter)).map((pokemon, index) => (
            <Grid item key={index} xs={12} sm={4} md={2}>
              <CardPokemon pokemon={pokemon} types={pokemon.types} />
            </Grid>
          ))}

        </Grid>
      </Container>

    </>
  )
}   
