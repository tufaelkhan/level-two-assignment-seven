export default function RecentEventCard2() {
    return (
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.pexels.com/photos/4066149/pexels-photo-4066149.jpeg?auto=compress&cs=tinysrgb&w=400"
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Donate Winter Clothes Today!</h1>
            <p className="py-1">
            Winter can be a harsh season for many, especially for those who lack adequate clothing to stay warm. By donating your gently used winter clothes, you can make a significant difference in someone's life. Imagine the comfort a warm coat or a pair of gloves can bring to someone facing the biting cold. Your generosity not only provides physical warmth but also brings hope and a sense of care to those in need. Every item you donate, be it a sweater, a scarf, or a pair of boots, helps create a warmer, kinder community where everyone can face the winter months with a little more ease.
            </p>
            
            
            <button className="btn btn-primary">Donate Now!</button>
          </div>
        </div>
      </div>
    );
  }
  