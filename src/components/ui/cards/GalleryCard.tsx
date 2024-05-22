export default function GalleryCard() {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-60"
          src="https://images.pexels.com/photos/11319521/pexels-photo-11319521.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Join Us in Spreading Winter Warmth</h2>
      </div>
    </div>
  );
}
