import { faFacebook, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
            <div className="footer-info flex justify-between items-start">
                {/* Location */}
                <div className="location">
                    <h5>Location</h5>
                    <p className="mb-4">2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                {/* Social Media */}
                <div className="social flex flex-col items-center relative left-40">
                    <h5>AROUND THE WEB</h5>
                    <ul className="flex items-center gap-5">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faGlobe} /></a></li>
                    </ul>
                </div>
                {/* About */}
                <div className="about">
                    <h5>ABOUT FREELANCER</h5>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>

        </div>
            {/* Copywrite */}
            <div className="copywrite text-center py-5">
                <p>Copyright &copy; Your Website 2024</p>
            </div>
      </footer>
    </>
  )
}
