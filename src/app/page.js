import { MdOutlineArticle } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { FiHelpCircle } from "react-icons/fi";
import Carusel from "./comp/carosuel";
import Carusel1 from "./comp/carousel-news";
import Services from "./comp/services";
import Promo from "./comp/promo";
import Footer from "./comp/footer";
import Popular from "./comp/popular";

export default function Home() {
  return (
    <div className="mineWraper">
      <div className="header">
        <div className="topmenuborder">
          <div className="topmenu">
            <div className="logo">RENTU</div>
            <div className="topnav">
              <ul>
                <li>
                  <MdOutlineArticle /> ახალი დამატებული
                </li>
                <li>
                  <CiCircleInfo /> ჩვენს შესახებ
                </li>
                <li>
                  <FiHelpCircle /> დახმარება
                </li>
              </ul>

              <ul>
                <li>KA</li>
                <li>GEL</li>
              </ul>

              <button>ავტორიზაცია</button>
            </div>
          </div>
        </div>

        <div className="mine-search">
          <p>იქირავე ბინა საათობრივად</p>
          <div className="searchfields">
            <select name="cars" id="locations">
              <option value="gldani">გლდანი</option>
              <option value="varketili">ვარკეთილი</option>
              <option value="isani">ისანი</option>
            </select>
            <div className="searchdevider"></div>
            <input type="date" id="dates" />
            <button>ძებნა</button>
          </div>
        </div>
      </div>
      <div className="min-posts">
        <Carusel />
        <Services />
        <Carusel1 />
        <Promo />
        <Popular />
      </div>
      <Footer />
    </div>
  );
}
