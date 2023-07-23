import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              Find a Job on <span>Jobster</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium delectus quidem fugiat sequi accusamus necessitatibus
              asperiores officiis, dolores nemo. Iusto enim laudantium
              perspiciatis numquam perferendis qui aut est. Magni, dolore.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
