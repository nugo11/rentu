import "./promo.css";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";

export default function Promo() {
  return (
    <>
      <div className="promo">
        <div className="promol">
          <img
            src="https://images.byhours.com/img-web/home/comofunciona.webp?quality=80"
            alt=""
          />
        </div>
        <div className="promor">
          <h3>როგორ მუშოობს სისტემა?</h3>
          <h1>გთავაზობთ სწრაფ და მარტივ საათობრივად ჯავშანის სისტემას</h1>
          <ul>
            <li>
              <CiLocationOn />
              <p>
                მდებარეობა <span>მოძებნი სასურველ ლოკაციის მიხედვიტ ბინას</span>
              </p>
            </li>
            <li>
              <CiCalendarDate />
              <p>
                დრო <span>აირჩევ სასურველ დღეს და საათობრივ პაკეტს</span>
              </p>
            </li>
            <li>
              <CiTimer />
              <p>
                შესვლა
                <span>
                  მონიშნავ სასურველ დროს თავისუფალი საათებიდან და აფორმებ ჯავშანს
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
