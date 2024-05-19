import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="card shrink-0 w-full shadow-2xl md:w-1/2 bg-base-200">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div className=" flex justify-between items-center">
              <label className="label">
                <p className="label-text-alt">
                  <span>Already have an account?</span>
                  <Link to={"/auth/login"} className=" link link-hover">
                    Login
                  </Link>
                </p>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
