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
        <div className="hero-content flex-col lg:flex-row">
          <div className=" lg:w-1/2 w-full">
            <img
              src={data?.data?.image}
              className=" rounded-lg shadow-2xl w-full"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{data?.data?.title}</h1>
            <p className="py-6">{data?.data?.description}</p>
            <p className="py-2">Category:{data?.data?.category}</p>
            <p className="py-2">
              Available Size:{" "}
              {data?.data?.available_sizes.map(
                (size: string, index: number) => (
                  <span key={index} className=" me-1">
                    {size}
                  </span>
                )
              )}
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
