import React from 'react'
import { Swiper, SwiperSlide,} from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/autoplay";
import S1 from '../../assets/image/slider1.jpg';
import S2 from '../../assets/image/slider2.jpeg';
import S3 from '../../assets/image/slider3.jpg';
import S4 from '../../assets/image/slider4.jpeg';


export const Slider = () => {
  return (
    <div className='container'>
    <Swiper className='slider-swiper'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
      autoplay={true}

    >
      <SwiperSlide> <img className='slider-img' src={S1} alt="" /> </SwiperSlide>
      <SwiperSlide> <img className='slider-img' src={S2} alt="" /> </SwiperSlide>
      <SwiperSlide> <img className='slider-img' src={S3} alt="" /> </SwiperSlide>
      <SwiperSlide> <img className='slider-img' src={S4} alt="" /> </SwiperSlide>
    </Swiper>
    </div>
  )
}
