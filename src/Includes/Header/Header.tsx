import { Box } from '@mui/system'
import { Grid, Tooltip, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Box sx={{ background: '#282828', color: 'white', padding: '1rem 0rem'}}>
        <Grid container justifyContent='space-between'>
          <Grid md={6} xs={12} textAlign="center" justifyContent="center" sx={{display: {xs: 'none', sm: 'flex' }}}>
            <Typography>By One, Get One 50% Off Books For All Ages</Typography>
          </Grid>
          <Grid md={6} xs={12} textAlign="center" justifyContent="center" sx={{display: {xs: 'none', sm: 'flex' }}}>
            <Tooltip title="Telegram" placement='bottom'>
              <TelegramIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title='Instagram' placement='bottom'>
              <InstagramIcon sx={{ padding: '0 1rem', cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title='Twitter' placement='bottom'>
              <TwitterIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Grid>
        </Grid>
        <Box sx={{ display: {xs: 'flex', sm: 'none'}}}  justifyContent="center" alignItems="center">
            <Typography sx={{ padding: '0 .4rem', fontWeight: '500'}}><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></Typography>
            <Typography sx={{ padding: '0 .4rem', fontWeight: '500' }}><Link to="/shop" style={{color: 'white', textDecoration: 'none'}}>Shop</Link></Typography>
            <Typography sx={{ padding: '0 .4rem', fontWeight: '500' }}><Link to="/blog" style={{color: 'white', textDecoration: 'none'}}>Blog</Link></Typography>
            <Typography sx={{ padding: '0 .4rem', fontWeight: '500' }}><Link to="/FAQs" style={{color: 'white', textDecoration: 'none'}}>FAQs</Link></Typography>
            <Typography sx={{ padding: '0 .4rem', fontWeight: '500' }}><Link to="/about-us" style={{color: 'white', textDecoration: 'none'}}>About Us</Link></Typography>
        </Box>
      </Box>
      <Box sx={{ background: '#D9D9D9', padding: '1rem 0' }}>
        <Grid container>
          <Grid xs={4} sx={{ display: 'flex'}} justifyContent="center" alignItems="center">
              <img src='/assets/imgs/img.png' style={{ width: '8%' }} />
              <Typography sx={{ padding: '0 .5rem' }}>Exammerce</Typography>
          </Grid>
          <Grid xs={4} sx={{display: 'flex'}}  justifyContent="center" alignItems="center">
              <Box sx={{ display: {xs: 'none', sm: 'flex'}}}  justifyContent="center" alignItems="center">
                <Typography sx={{ padding: '0 1rem', fontWeight: '500'}}><Link to="/" style={{color: 'black', textDecoration: 'none'}}>Home</Link></Typography>
                <Typography sx={{ padding: '0 1rem', fontWeight: '500' }}><Link to="/shop" style={{color: 'black', textDecoration: 'none'}}>Shop</Link></Typography>
                <Typography sx={{ padding: '0 1rem', fontWeight: '500' }}><Link to="/blog" style={{color: 'black', textDecoration: 'none'}}>Blog</Link></Typography>
                <Typography sx={{ padding: '0 1rem', fontWeight: '500' }}><Link to="/FAQs" style={{color: 'black', textDecoration: 'none'}}>FAQs</Link></Typography>
                <Typography sx={{ padding: '0 1rem', fontWeight: '500' }}><Link to="/about-us" style={{color: 'black', textDecoration: 'none'}}>About Us</Link></Typography>
              </Box>
          </Grid>
          <Grid xs={4} sx={{ display: 'flex'}} justifyContent="center" alignItems="center">
            <Box>
              <Tooltip title="Checkout">
                <ShoppingCartIcon sx={{ cursor: 'pointer' }} />
              </Tooltip>
              <Tooltip title="Favotites">
                <FavoriteIcon sx={{ padding: '0 .5rem', cursor: 'pointer' }} />
              </Tooltip>
              <Tooltip title="Dashboard">
                <PersonIcon sx={{ cursor: 'pointer' }} />
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Header