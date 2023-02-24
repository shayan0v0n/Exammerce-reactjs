import { Button, Divider, Grid, Tab, Tabs, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Box } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import SidebarOne from './Sidebars/SidebarOne';
import SidebarTwo from './Sidebars/SidebarTwo';
import BookTabOne from './Booktabs/BookTabOne';
import BookTabTwo from './Booktabs/BookTabTwo';
import BookTabThree from './Booktabs/BookTabThree';


interface sliderItem {
  img: string
  tilte: string
  des: string
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

const Home = () => {

const [bookTabValue, setBookTabValue] = useState(0);

const bookTabHandler = (event: React.SyntheticEvent, newValue: number) => {
  setBookTabValue(newValue);
};

  return (
    <>
      <Grid container sx={{ margin: '2rem 0' }} justifyContent="space-around">
        <Grid xs={12} md={3} sx={{ display: { xs: 'none', sm: 'block' } }} item>
          <SidebarOne />
          <SidebarTwo />
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
            <Grid container>
              <Grid xs={7}>
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
                    <BookTabOne />
                  )}
                  {bookTabValue === 1 && (
                    <BookTabTwo/>
                  )}
                  {bookTabValue === 2 && (
                    <BookTabThree />
                  )}
                </Box>
                </Box>
              </Grid>
              <Grid xs={4} textAlign='right'>
                  <Button variant='contained' sx={{ background: '#F65D4E', '&:hover': {background: '#CC3223'}, borderRadius: '30px' }}>All Products <ArrowRightIcon /></Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    
    </>
  )
}

export default Home