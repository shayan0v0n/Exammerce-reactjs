import { Grid } from '@mui/material'
import ProductCard from '../../../Components/Cards/ProductCard'
import productsData from '../../../constants/products'

const BookTabTwo = () => {
  return (
    <Grid container display={'flex'} justifyContent={'space-around'}>
        {productsData.map((product:BookProductInterface) => (
          product.tag.includes('on-sale') ? (
            <Grid item xs={4}>
            <ProductCard product={product} />
          </Grid>
          ) : null
        ))}
    </Grid>
  )
}

export default BookTabTwo