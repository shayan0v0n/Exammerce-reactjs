import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

interface BookProductInterface {
  title: string
  description: string
  slug: string
}
interface productPropsInterface {
  product: BookProductInterface
}

const ProductCard = (props:productPropsInterface) => {
  const {product} = props

  return (
    <Card sx={{ maxWidth: 345, margin: '.7rem' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={`/assets/imgs/products/${product.slug}.jpg`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detail</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard