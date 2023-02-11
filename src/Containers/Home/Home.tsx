import { Divider, Grid, Tab, Tabs, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Box } from '@mui/system';
import SidebarCard from '../../Components/Cards/SidebarCard';
import { useState } from 'react';

interface sliderItem {
  img: string
  tilte: string
  des: string
}

interface product {
  title:string
  author:string
  img:string
}

const dataSlider:sliderItem[] = [
  {
    img: "/assets/imgs/homeSlider/1.jpg",
    tilte: "1این یک پیام تست است",
    des: "تست ۲",
  },
  {
    img: "/assets/imgs/homeSlider/2.jpg",
    tilte: "2این یک پیام تست است",
    des: "تست ۲",
  },
  {
    img: "/assets/imgs/homeSlider/3.jpg",
    tilte: "3این یک پیام تست است",
    des: "تست ۲",
  }
];

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
const Home = () => {

const [bookTabValue, setBookTabValue] = useState(0);

const bookTabHandler = (event: React.SyntheticEvent, newValue: number) => {
  setBookTabValue(newValue);
};

  return (
    <>
      <Grid container sx={{ margin: '2rem 0' }} justifyContent="space-around">
        <Grid xs={12} md={3} sx={{ display: { xs: 'none', sm: 'block' } }} item>
          <Box sx={{ padding: '1.5rem', margin: '2rem', background: "#D9D9D9", borderRadius: '8px' }}>
            <Typography variant='h5' fontWeight="bold">Top 10 This Week</Typography>
              <Divider sx={{ margin: "1rem" }} />
            <SidebarCard products={products1}  />
          </Box>
          <Box sx={{ padding: '1.5rem', margin: '2rem', background: "#D9D9D9", borderRadius: '8px' }}>
            <Typography variant='h5' fontWeight="bold">Top 10 This Week</Typography>
              <Divider sx={{ margin: "1rem" }} />
            <SidebarCard products={products2} />
          </Box>
        </Grid>
        <Grid xs={12} md={8} item>
        <Swiper
          style={{ margin: "2rem", borderRadius: '15px' }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          loop={true}
          autoplay={{
              delay: 4000,
              disableOnInteraction: false
          }}
        >
          { dataSlider.map((item:sliderItem) => (
            <SwiperSlide><img src={item.img} width="100%" /></SwiperSlide>
          )) }
        </Swiper>
          <Box>
            <Tabs value={bookTabValue} onChange={bookTabHandler} aria-label="basic tabs example" textColor='inherit' sx={{
              '& .MuiTabs-indicator': { backgroundColor: '#F65D4E', color: 'black'},
              '& .MuiTab-root': { color: 'black' },
              '& .Mui-selected': { color: 'black', fontWeight: 'bold' },
            }}>
              <Tab label="Popular Books" />
              <Tab label="On Sale" />
              <Tab label="Top Rated"  />
            </Tabs>
            <Box sx={{ padding: 2 }}>
            {bookTabValue === 0 && (
              <Box>
                <Typography>The first tab</Typography>
              </Box>
            )}
            {bookTabValue === 1 && (
              <Box>
                <Typography>The second tab</Typography>
              </Box>
            )}
            {bookTabValue === 2 && (
              <Box>
                <Typography>The third tab</Typography>
              </Box>
            )}
          </Box>
          </Box>
        </Grid>
      </Grid>
    
    </>
  )
}
// F65D4E // custom tab...
export default Home