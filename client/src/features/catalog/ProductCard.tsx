import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import type { Product } from "../../app/models/product";

type Props = {
  product: Product;
}

export default function ProductCard({product}: Props) {
  return (
    <Card elevation={3} sx={{ width: 280, borderRadius:3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardMedia 
        sx={{ height: 240 , backgroundSize: 'cover' }}
        image={product.pictureUrl}
        title={product.name}
        />
        <CardContent>
            <Typography gutterBottom sx={{textTransform: 'uppercase'}} variant="subtitle2">{product.name}</Typography>
            <Typography variant="h6" sx={{color: 'secondary.main'}}>${(product.price/100).toFixed(2)}</Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'space-between'}}>
            <Button>Add to Cart</Button>
            <Button component={Link} to={`/catalog/${product.id}`}>View</Button>
        </CardActions>
    </Card>
  )
}