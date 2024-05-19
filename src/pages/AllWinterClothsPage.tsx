import Container from "../components/shared/container/Container";
import Header from "../components/shared/heading/Header";
import WinterClothCard from "../components/ui/cards/WinterClothCard";

export default function AllWinterClothsPage() {
  return (
    <Container>
      <Header>All Winter Cloths</Header>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <WinterClothCard />
        <WinterClothCard />
        <WinterClothCard />
      </div>
    </Container>
  );
}
