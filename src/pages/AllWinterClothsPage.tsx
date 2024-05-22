import Container from "../components/shared/container/Container";
import Header from "../components/shared/heading/Header";
import Loader from "../components/shared/loader/Loader";
import WinterClothCard from "../components/ui/cards/WinterClothCard";
import { useGetAllWinterClothsQuery } from "../redux/features/winter-cloths/winter-cloth";
import { IWinterCloth } from "../types/winter-cloths..type";

export default function AllWinterClothsPage() {
  const { data, isLoading } = useGetAllWinterClothsQuery(undefined);
  if(isLoading)<Loader/>
  console.log(data?.data)
  return (
    <Container>
      <Header>All Winter Cloths</Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          data?.data?.map((item:IWinterCloth)=> <WinterClothCard key={item._id} data={item}/>)
        }
      </div>
    </Container>
  );
}
