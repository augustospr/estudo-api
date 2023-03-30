import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardPokemon({ pokemon, types }) {

	const typeHandler = () => {
		if (types[1]) {
			return types[0].type.name + " | " + types[1].type.name;
		}
		else {
			return types[0].type.name;
		}
	}

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image={pokemon.sprites.front_default}
				title={pokemon.name}
			/>
			<CardContent>
				<Typography className='nomePokemon' gutterBottom variant="h5" component="div">
					{pokemon.name}
				</Typography>
			</CardContent>
			<CardActions>
				<Typography className='tipos' gutterBottom variant="h8" component="div">
					{typeHandler()}
				</Typography>
			</CardActions>
		</Card>
	);
}