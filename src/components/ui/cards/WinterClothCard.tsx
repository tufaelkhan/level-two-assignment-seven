import { Link } from "react-router-dom";
import { IWinterCloth } from "../../../types/winter-cloths..type";

export default function WinterClothCard({ data }: { data: IWinterCloth }) {
  const { _id, title, image, available_sizes } = data;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={`${title} image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Available Size:{" "}
          {available_sizes.map((size, index) => (
            <span key={index} className=" me-1">
              {size}
            </span>
          ))}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/winter-clothes/${_id}`} className="btn btn-primary">
            Details
          </Link>
          <button className="btn btn-primary btn-outline">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
