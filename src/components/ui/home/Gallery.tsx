import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../shared/container/Container";
import Header from "../../shared/heading/Header";
import GalleryCard from "../cards/GalleryCard";
export default function Gallery() {
  return (
    <Container>
      <Header>Gallery</Header>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <GalleryCard />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
