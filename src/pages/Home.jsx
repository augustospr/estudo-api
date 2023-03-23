import React, { useEffect } from "react";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import Cabecalho from "../components/cabecalho/Cabecalho";
import PesquisaPokemon from "../components/pesquisaPokemon/PesquisaPokemon";
// import Paginacao from "../components/paginacao/Paginacao";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const json = await data.json();
      return json;
    }
    const result = fetchData()
      .catch(console.error);;
    setData(result);
  }, [])

  console.log(data);

  return (
    <>
      <Container sx={{ paddingBottom: 5 }}>
        <Grid container spacing={2}>
          <Cabecalho />
          <PesquisaPokemon />

          <Grid item xs={12} sm={4} md={2}>
            <CardPokemon />
          </Grid>

        </Grid>
      </Container>

    </>
  )
}   
