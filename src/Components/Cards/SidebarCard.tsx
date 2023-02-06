import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

interface product {
    title:string
    author:string
    img:string
}

const SidebarCard = () => {
    const products: product[] = [
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

  return (
    <Box>
            { products.map((item:product ,) => (
                <Box sx={{ margin: '2rem 1rem', display:'flex', justifyContent:'space-start', alignItems:'center' }}>
                        <img src={item.img} style={{ width: '30%', borderRadius: '10px' }} />
                        <Box sx={{ margin: '0 1rem' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.title}</Typography>
                            <Typography sx={{fontSize: '.8rem'}}>{item.author}</Typography>
                        </Box>
                </Box>
            )) }
    </Box>
  )
}

export default SidebarCard