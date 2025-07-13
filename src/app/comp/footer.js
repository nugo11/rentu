import "./footer.css";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="fotfirst">
            <a href="#">ქირავდება ბინები</a>
            <a href="#">ბინები საათობრივად</a>
            <a href="#">სასტუმროები</a>
            <a href="#">აგარაკები</a>
        </div>
        <div className="fotersecond">
            <div className="socsect">
          <h3>გამოგვყევით სოციალურ ქსელებში</h3>
          <div className="socicons">
            <CiFacebook />
            <CiInstagram />
            <PiTiktokLogoThin />
          </div>
        </div>
        <div className="sectcont">
          <h3>კონტაქტი</h3>
          <a href="tel:+995555555555">555 11 22 33</a>
          <a href="mailto:sales@rentu.ge">sales@rentu.ge</a>
        </div>
        <div className="sectpricacy">
          <p>ყველა უფლება დაცულია | 2025</p>
        </div>
        </div>
        
      </div>
    </>
  );
}
