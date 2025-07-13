import "./services.css";
import { FaKey } from "react-icons/fa";
import { PiBroomBold } from "react-icons/pi";
import { FaCamera } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";


export default function Services() {
  return (
    <>
      <div className="services">
        <div className="services-card">
          <div className="servciesicon">
            <span
              style={{
                backgroundColor: "#ffe1c5",
                color: "#ff7b00",
              }}
            >
              <FaKey />
            </span>
          </div>
          <h3>გასაღების ყუთი</h3><br />
          <p>
            გთავაზობთ სმარტ გასაღების ყუთებს, რათა არ მოგიწიოთ სტუმრების
            ფიზიკური დახვედრა. მარტივი და უსაფრთხო გადაცემა 24/7.
          </p>
        </div>

        <div className="services-card">
          <div className="servciesicon">
            <span
              style={{
                backgroundColor: "#c5e3ffff",
                color: "#0077ffff",
              }}
            >
              <PiBroomBold />
            </span>
          </div>
          <h3>დასუფთავება</h3><br />
          <p>
            პროფესიონალური დასუფთავების სერვისი თქვენი ბინის მყუდროებისა და
            ჰიგიენისთვის. შეუკვეთეთ გაწმენდა ყოველი ვიზიტის შემდეგ.
          </p>
        </div>

        <div className="services-card">
          <div className="servciesicon">
            <span
              style={{
                backgroundColor: "#ccffc5ff",
                color: "#06a52eff",
              }}
            >
              <FaCamera />
            </span>
          </div>
          <h3>ფოტო-ვიდეო გადაღება</h3><br />
          <p>
            პროფესიონალი ფოტოგრაფები დაგეხმარებიან თქვენი ბინის მიმზიდველად
            წარმოჩენაში. იდეალურია პლატფორმაზე ბინის პოპულარიზაციისთვის.
          </p>
        </div>

        <div className="services-card">
          <div className="servciesicon">
            <span
              style={{
                backgroundColor: "#f1c5ffff",
                color: "#f700ffff",
              }}
            >
              <MdOutlineMiscellaneousServices />
            </span>
          </div>
          <h3>ხელოსნის სერვისი</h3><br />
          <p>
            თუ რაიმე გაფუჭდა, ჩვენი სანდო ხელოსნები დროულად მოაგვარებენ
            პრობლემას — წყალი, ელექტროობა, ავეჯი და სხვა.
          </p>
        </div>
      </div>
    </>
  );
}
