import { Box, Divider, Typography } from '@mui/material'
import SidebarCard from '../../../Components/Cards/SidebarCard'


interface product {
    title:string
    author:string
    img:string
}

const products1: product[] = [
    {
        title: 'Life Flight',
        author: 'Misty Figueroa',
        img: '/assets/imgs/sidebarProducts/1.jpg'
    },
    {
        title: 'Heartland Stars',
        author: 'Ernesto Wade',
        img: '/assets/imgs/sidebarProducts/2.jpg'
    },
    {
        title: 'Goodbye Again',
        author: 'Gilberto Mills',
        img: '/assets/imgs/sidebarProducts/3.jpg'
    },
    {
        title: 'Annie Leibovitz:',
        author: 'Rita James',
        img: '/assets/imgs/sidebarProducts/4.jpg'
    },
    {
        title: 'The Good Egg',
        author: 'Arthur Gonzalez',
        img: '/assets/imgs/sidebarProducts/5.jpg'
    }
]

const SidebarOne = () => {
  return (
    <Box sx={{ padding: '1.5rem', margin: '2rem', background: "#D9D9D9", borderRadius: '8px' }}>
    <Typography variant='h5' fontWeight="bold">Top 10 This Week</Typography>
        <Divider sx={{ margin: "1rem" }} />
        <SidebarCard products={products1}  />
    </Box>
  )
}

export default SidebarOne