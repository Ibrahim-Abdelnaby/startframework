import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/heroAvatar.svg";

export function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <img src={avatar} alt="Hero Avatar" className="w-10/12 mb-5" />
            {/* Hero Title */}
            <div className="hero-title relative">
              <h1 className="uppercase font-bold text-5xl text-white my-3">
                Start Framework
              </h1>
              {/* Underline */}
              <div className="flex justify-center items-center">
                <div className="line"></div>
                <FontAwesomeIcon icon={faStar} className="mx-3 text-white" />
                <div className="line"></div>
              </div>
            </div>
            <p className="text-slate-50 mt-3">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
