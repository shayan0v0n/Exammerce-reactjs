import { Grid } from '@mui/material'
import ProductCard from '../../../Components/Cards/ProductCard'
import productsData from '../../../constants/products'



const BookTabOne = () => {
  return (
    <Grid container display={'flex'} justifyContent={'space-around'}>
        {productsData.map((product:BookProductInterface) => (
          product.tag.includes('popular-books') ? (
            <Grid item xs={4}>
            <ProductCard product={product} />
          </Grid>
          ) : null
        ))}
    </Grid>
  )
}

export default BookTabOne