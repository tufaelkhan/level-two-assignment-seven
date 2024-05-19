import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../shared/container/Container";
import Header from "../../shared/heading/Header";
import RecentEventCard from "../cards/RecentEventCard";
export default function RecentEvent() {
  return (
    <Container>
      <Header>Recent Events</Header>
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
      >
        <SwiperSlide>
          <RecentEventCard />
        </SwiperSlide>
        <SwiperSlide>
          <RecentEventCard />
        </SwiperSlide>
        <SwiperSlide>
          <RecentEventCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
