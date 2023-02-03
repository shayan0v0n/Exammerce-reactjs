import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box sx={{ background: '#282828', color: 'white', padding: '3rem' }}>
      <Grid container>
        <Grid xs={12} md={3} sx={{ margin: '1rem 0' }}>
          <Box sx={{ borderRight: { md: '1px solid white' } }}>
              <Box sx={{ display: 'flex', padding: '1rem 0'}} justifyContent="start" alignItems="center">
                <img src='/assets/imgs/img.png' style={{ width: '8%' }} />
                <Typography sx={{ padding: '0 .5rem' }} variant='h5'>Exammerce</Typography>
              </Box>
              <Box >
                <Typography sx={{ padding: '.4rem 0', fontWeight: '200' }}>1418 River Drive, Suite 35 <br /> Cottonhall, CA 9622</Typography>
                <Typography sx={{ padding: '.4rem 0', fontWeight: '200' }}>Monday – Friday: 9:00-20:00 <br /> Saturday: 11:00 – 15:00</Typography>
              </Box>  
          </Box>
        </Grid>
        <Grid xs={12} md={8} sx={{ margin: '1rem 0' }}>
          <Grid container sx={{ padding: '0 1.5rem'}}>
            <Grid xs={12} md={4}>
              <Typography variant='h5'>Other Page</Typography>
              <List>
                <ListItem sx={{ padding: '.2rem' }}>
                  <Link to='/' style={{color:'#ABB7B3', textDecoration: 'none'}}>Home</Link>
                </ListItem>
                <ListItem sx={{ padding: '.2rem' }}>
                  <Link to='/shop' style={{color:'#ABB7B3', textDecoration: 'none'}}>Shop</Link>
                </ListItem> 
                <ListItem sx={{ padding: '.2rem' }}>
                  <Link to='/blog' style={{color:'#ABB7B3', textDecoration: 'none'}}>Blog</Link>
                </ListItem>
                <ListItem sx={{ padding: '.2rem' }}>
                  <Link to='/FAQs' style={{color:'#ABB7B3', textDecoration: 'none'}}>FAQs</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid xs={12} md={4} sx={{ margin: '1rem 0' }}>
            <Typography variant='h5'>Social Media</Typography>
              <List>
                <ListItem sx={{ cursor: 'pointer' }}>
                  <TelegramIcon sx={{ padding: '0 .6rem 0 0' }} />Telegram
                </ListItem>
                <ListItem sx={{ cursor: 'pointer' }}>
                  <InstagramIcon sx={{ padding: '0 .6rem 0 0' }} />Instagram
                </ListItem>
                <ListItem sx={{ cursor: 'pointer' }}>
                  <TwitterIcon sx={{ padding: '0 .6rem 0 0' }} />Twitter
                </ListItem>
              </List>
            </Grid>
            <Grid xs={12} md={4}>
            <Typography variant='h5'>About Us</Typography>
            <Typography sx={{ padding: '.4rem 0', fontWeight: '300' }}>In this example, we will be creating a list of different categories of mail which will depict a sub-classification of inbox mail type using nested list format. The ExpandLess and ExpandMore are used to close and open the sub-list inside Inbox list item. When it is clicked the handleClick method expands or collapses the sub-list.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer