import { Link } from "react-router-dom";
import { useGetAllWinterClothsQuery } from "../../../redux/features/winter-cloths/winter-cloth";
import { IWinterCloth } from "../../../types/winter-cloths..type";
import Container from "../../shared/container/Container";
import Header from "../../shared/heading/Header";
import Loader from "../../shared/loader/Loader";
import WinterClothCard from "../cards/WinterClothCard";

export default function WinterClothSection() {
  const { data, isLoading } = useGetAllWinterClothsQuery(6);

  if (isLoading) <Loader />;
  return (
    <Container>
      <Header>Winter Clothes</Header>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {data?.data.map((item: IWinterCloth) => (
          <WinterClothCard key={item._id} data={item} />
        ))}
      </div>
      <div className=" flex justify-center mt-7">
        <Link to={"/winter-clothes"} className=" btn btn-outline btn-primary">
          View More
        </Link>
      </div>
    </Container>
  );
}
