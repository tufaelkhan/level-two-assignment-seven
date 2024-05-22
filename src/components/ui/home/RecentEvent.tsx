import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../shared/container/Container";
import Header from "../../shared/heading/Header";
import RecentEventCard from "../cards/RecentEventCard";
import RecentEventCard2 from "../cards/RecentEventCard2";
import RecentEventCard3 from "../cards/RecentEventsCard3";

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
          <RecentEventCard2 />
        </SwiperSlide>
        <SwiperSlide>
          <RecentEventCard3 />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
