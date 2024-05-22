export default function RecentEventCard() {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images.pexels.com/photos/6591152/pexels-photo-6591152.jpeg?auto=compress&cs=tinysrgb&w=400"
          className=" rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Donate Today and Make a Difference!</h1>
          <p className="py-1">
          As the winter season approaches, many individuals and families in our community are facing the harsh reality of the cold without adequate clothing. Recent weather forecasts predict a particularly severe winter, with temperatures expected to drop significantly over the next few weeks.
          </p>
          <p className="py-3">
          We are organizing a winter clothing donation drive to ensure that everyone in our community has the warmth and protection they need. We are accepting donations of new or gently used winter coats, sweaters, gloves, hats, scarves, and blankets.
          </p>
          
          <button className="btn btn-primary">Donate Now!</button>
        </div>
      </div>
    </div>
  );
}
