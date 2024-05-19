import bannerImage from "../../../assets/banner.jpg";
export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" w-1/2 mx-auto text-center">
        <div>
          <h1 className=" text-primary font-extrabold text-xl md:text-4xl">
            Streamlining warmth distribution for chilly communities.
          </h1>
          <div className=" flex justify-center mt-7">
            <div>
              <button className=" btn btn-primary btn-md me-5">
                Let's Make Change
              </button>
              <button className=" btn btn-primary btn-outline btn-md">
                Join us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
