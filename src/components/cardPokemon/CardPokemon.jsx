import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardPokemon({ pokemon }) {

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image={pokemon.sprites.front_default}
				title={pokemon.species.name}
			/>
			<CardContent>
				<Typography className='nomePokemon' gutterBottom variant="h5" component="div">
					{pokemon.species.name}
				</Typography>
			</CardContent>
			<CardActions>
				<Typography className='tipos' gutterBottom variant="h8" component="div">
					{"tipos"}
				</Typography>
			</CardActions>
		</Card>
	);
}