import Container from "../../shared/container/Container";
import Header from "../../shared/heading/Header";
import DonorCard2 from "../cards/DonorCard2";
import DonorCard3 from "../cards/DonorCard3";
import DonorCard from "../cards/DonorCard";

export default function DonorSection() {
  return (
    <Container>
      <Header>Donor Testimonials</Header>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <DonorCard />
        <DonorCard2/>
        <DonorCard3/>
      </div>
    </Container>
  );
}
