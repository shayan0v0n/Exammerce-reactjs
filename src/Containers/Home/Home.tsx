import { Divider, Grid, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Box } from '@mui/system';
import SidebarCard from '../../Components/Cards/SidebarCard';

interface sliderItem {
  img: string
  tilte: string
  des: string
}

const Home = () => {
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

  return (
    <>
      <Grid container sx={{ margin: '2rem 0' }} justifyContent="space-around">
        <Grid xs={12} md={3} sx={{ display: { xs: 'none', sm: 'flex' } }} item>
          <Box sx={{ padding: '1.5rem', margin: '2rem', background: "#D9D9D9", borderRadius: '8px' }}>
            <Typography variant='h5' fontWeight="bold">Top 10 This Week</Typography>
              <Divider sx={{ margin: "1rem" }} />
            <SidebarCard />
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
        </Grid>
      </Grid>
    
    </>
  )
}

export default Home