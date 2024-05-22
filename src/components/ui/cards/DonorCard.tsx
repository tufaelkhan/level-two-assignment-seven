export default function DonorCard() {
  return (
    <div className="card bg-base-100 shadow-xl">

      <div className="card-body">
        <h2 className="card-title font-semibold text-2xl mb-3">
          Sarah T.
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-xl">"I donated my old winter coat and it felt amazing knowing it went to someone in need. This organization makes it so easy to give back."</p>
        <div className="card-actions justify-end mt-5">
          <div className="btn btn-outline btn-primary font-semibold text-lg px-3 py-2">see details</div>
        </div>
      </div>
    </div>
  );
}
