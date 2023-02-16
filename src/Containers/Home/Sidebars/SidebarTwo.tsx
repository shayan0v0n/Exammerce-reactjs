import { Box, Divider, Typography } from '@mui/material'
import SidebarCard from '../../../Components/Cards/SidebarCard'

interface product {
    title:string
    author:string
    img:string
}

const products2: product[] = [
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

const SidebarTwo = () => {
  return (
    <Box sx={{ padding: '1.5rem', margin: '2rem', background: "#D9D9D9", borderRadius: '8px' }}>
    <Typography variant='h5' fontWeight="bold">Top 10 This Week</Typography>
      <Divider sx={{ margin: "1rem" }} />
    <SidebarCard products={products2} />
  </Box>
  )
}

export default SidebarTwo