export default function RecentEventCard3() {
    return (
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=400"
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Donate Your Gently Used Winter Clothes</h1>
            <p className="py-1">
            This winter, let’s come together to spread the warmth. Your donations can turn the coldest days into opportunities for comfort and compassion. By cleaning out your closets and sharing what you no longer need, you help build a bridge of kindness and support. Whether it's through a local shelter, a community organization, or a dedicated winter clothes drive, your contribution is invaluable. Remember, every coat counts, and each act of giving brings us one step closer to ensuring no one has to endure the winter chill without the proper attire. Let's bundle up for a cause and make this season warmer for everyone.
            </p>
            <button className="btn btn-primary">Donate Now!</button>
          </div>
        </div>
      </div>
    );
  }
  