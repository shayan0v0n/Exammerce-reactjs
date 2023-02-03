import { Grid } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Home = () => {
  const dataSlider = [
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
      <Grid container sx={{ margin: '2rem 0' }}>
        <Grid xs={4}>

        </Grid>
        <Grid xs={8}>
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
          { dataSlider.map((item) => (
            <SwiperSlide><img src={item.img} width="100%" /></SwiperSlide>
          )) }
        </Swiper>
        </Grid>
      </Grid>
    
    </>
  )
}

export default Home