import Swal from "sweetalert2";
import Loader from "../components/shared/loader/Loader";
import { useDeleteWinterClothMutation } from "../redux/features/winter-cloths/deleteWinterCloth";
import { useGetAllWinterClothsQuery } from "../redux/features/winter-cloths/winter-cloth";
import { IWinterCloth } from "../types/winter-cloths..type";

export default function AllWinterClothsDashboard() {
  const { data, isLoading } = useGetAllWinterClothsQuery(undefined);
  console.log({ data });
  const [deleteWinterCloth, { isLoading: deleteLoader }] =
    useDeleteWinterClothMutation();
  const handleDeleteWinterCloth = async (id: string) => {
    const res = await deleteWinterCloth(id).unwrap();
    Swal.fire(res.message);
  };
  if (isLoading) <Loader />;
  return (
    <div>
      <h1 className=" text-3xl lg:text-5xl text-center my-5">
        All Winter Cloths
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item: IWinterCloth, index: number) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <th>
                  <button className="btn btn-primary btn-xs">Edit</button>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteWinterCloth(item._id as string)}
                    className="btn btn-error btn-xs"
                  >
                    {deleteLoader ? (
                      <span className=" loading loading-spinner loading-xs"></span>
                    ) : (
                      "Delete"
                    )}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
