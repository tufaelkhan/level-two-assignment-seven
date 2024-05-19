import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="card shrink-0 w-full shadow-2xl md:w-1/2 bg-base-200">
        <form className="card-body">
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
                  <span>New in ChillNexus?</span>
                  <Link to={"/auth/register"} className=" link link-hover">
                    Create account
                  </Link>
                </p>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
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
