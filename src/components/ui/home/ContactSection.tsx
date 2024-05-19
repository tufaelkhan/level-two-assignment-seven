import Container from "../../shared/container/Container";

export default function ContactSection() {
  return (
    <Container>
      <h1 className=" text-2xl lg:text-4xl text-center mb-10 font-bold">
        Contact Us
      </h1>
      <div className=" flex justify-center">
        <div className="card shrink-0 w-full shadow-2xl md:w-1/2 bg-base-200">
          <form className="card-body">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-2">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
