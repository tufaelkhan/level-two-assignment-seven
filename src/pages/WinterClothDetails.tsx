import { useParams } from "react-router-dom";
import Container from "../components/shared/container/Container";
import Loader from "../components/shared/loader/Loader";
import { useGetWinterClothDetailsQuery } from "../redux/features/winter-cloths/single-winter-cloth";

export default function WinterClothDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetWinterClothDetailsQuery(id);
  if (isLoading) <Loader />;

  return (
    <Container>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col gap-3 lg:flex-row">
          <div className=" w-full">
            <img
              src={data?.data?.image}
              className=" rounded-xl shadow-2xl w-full"
              alt=""
            />
          </div>
          <div className="md:ml-5 md:w-9/12 w-full">
            <h1 className="text-5xl font-bold">{data?.data?.title}</h1>
            <p className="py-6">{data?.data?.description}</p>
            <p className="py-2">Category:{data?.data?.category}</p>
            <p className="py-2">
              Available Size:{" "}
              {data?.data?.available_sizes}
            </p>
            <button className="btn btn-primary">Donate Now</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
