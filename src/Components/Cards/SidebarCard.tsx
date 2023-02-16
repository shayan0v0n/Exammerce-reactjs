import { Typography } from '@mui/material'
import { Box } from '@mui/system'
interface product {
    title:string
    author:string
    img:string
}

interface SideBarCardProps {
    products: product[]
}


const SidebarCard = (props: SideBarCardProps) => {
    const { products } = props

    return (
        <Box>
            { products.map((item:product) => (
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