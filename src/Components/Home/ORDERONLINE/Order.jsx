

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';




const Order = () => {
    return (
        <div>

<section className='my-32'>
    <SectionTitle  subHeading ={'---From 11:00am to 10:00pm---'}
    heading={"ORDER ONLINE"}
    
    >
       
    </SectionTitle>
</section>

                <Swiper
         slidesPerView={4}
         centeredSlides={true}
         spaceBetween={30}
         grabCursor={true}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination]}
        className="mySwiper "
      >
        <div>
        <SwiperSlide >
            <img className='' src={img1} alt="" />
            <h2 className='text-5xl text-center font-bold uppercase  text-white -mt-32'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide className='mx-20 '>
            <img src={img2} alt="" />
            <h2 className='text-5xl text-center font-bold uppercase text-white -mt-32'>Soups</h2>
        </SwiperSlide>
        <SwiperSlide >
            <img src={img3} alt="" />
            <h2 className='text-5xl text-center font-bold uppercase text-white -mt-32'>pizzas</h2>
        </SwiperSlide>
        <SwiperSlide >
            <img src={img4} alt="" />
            <h2 className='text-5xl text-center font-bold uppercase text-white -mt-32'>desserts</h2>
        </SwiperSlide>
        <SwiperSlide >
            <img src={img5} alt="" />
            <h2 className='text-5xl text-center font-bold uppercase text-white -mt-32'>Salads</h2>
        </SwiperSlide>
        </div>
       
       
      </Swiper>  
        </div>
    );
};

export default Order;