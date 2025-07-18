"use client";
import { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import "./create.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.7151,
  lng: 44.8271,
};

export default function Create() {
  const [position, setPosition] = useState(null);

  const handlePlaceSelect = (e) => {
    const autocomplete = new window.google.maps.places.Autocomplete(e.target);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const location = place.geometry.location;
        setPosition({
          lat: location.lat(),
          lng: location.lng()
        });
      }
    });
  };


  const geocodeCity = async (cityName) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: cityName }, (results, status) => {
      if (status === "OK") {
        const location = results[0].geometry.location;
        setPosition({
          lat: location.lat(),
          lng: location.lng()
        });
      } else {
        console.error("Geocode error:", status);
      }
    });
  };

  return (
    <>
      <div className="addnews">
        <h2></h2>
        <div className="fields">
          <div className="tworowad">
            <h3>
              უძრავი ქონების ტიპი <span>*</span>
            </h3>
            <ul>
              <li>ბინა</li>
              <li>კერძო სახლი</li>
              <li>აგარაკი</li>
            </ul>
          </div>
          <div className="tworowad">
            <h3>
              რამდენ ადამიანზეა გათვლილი? <span>*</span>
            </h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10+</li>
            </ul>
          </div>
          <div className="tworowad">
            <h3>
              მდებარეობა <span>*</span>
            </h3>

            <LoadScript
              googleMapsApiKey="AIzaSyBC_GOkgduGLhOp1cPdMlog8DGWGf-W0NA"
              libraries={["places"]}
            >
              <div>
                <select onChange={geocodeCity} defaultValue="">
                  <option value="თბილისი"> თბილისი </option>
                  <option value="ბათუმი"> ბათუმი </option>
                  <option value="ქუთაისი"> ქუთაისი </option>
                  <option value="რუსთავი"> რუსთავი </option>
                  <option value="ზუგდიდი"> ზუგდიდი </option>
                  <option value="თელავი"> თელავი </option>
                  <option value="გორი"> გორი </option>
                  <option value="ბაკურიანი"> ბაკურიანი </option>
                  <option value="ბორჯომი"> ბორჯომი </option>
                  <option value="გუდაური"> გუდაური </option>
                  <option value="ჯავა"> ჯავა </option>
                  <option value="აფხაზეთის ავტონომიური რესპუბლიკა">
                    აფხაზეთის ავტონომიური რესპუბლიკა
                  </option>
                  <option value="დმანისის რაიონი"> დმანისის რაიონი </option>
                  <option value="ცხინვალის რაიონი"> ცხინვალის რაიონი </option>
                  <option value="სენაკის რაიონი"> სენაკის რაიონი </option>
                  <option value="საჩხერის რაიონი"> საჩხერის რაიონი </option>
                  <option value="ონის რაიონი"> ონის რაიონი </option>
                  <option value="ნინოწმინდის რაიონი">
                    {" "}
                    ნინოწმინდის რაიონი{" "}
                  </option>
                  <option value="აბასთუმანი"> აბასთუმანი </option>
                  <option value="აბაშა"> აბაშა </option>
                  <option value="ამბროლაური"> ამბროლაური </option>
                  <option value="აფხაზეთი"> აფხაზეთი </option>
                  <option value="ახალქალაქი"> ახალქალაქი </option>
                  <option value="ახალციხე"> ახალციხე </option>
                  <option value="ახმეტა"> ახმეტა </option>
                  <option value="ბაღდათი"> ბაღდათი </option>
                  <option value="ბოლნისი"> ბოლნისი </option>
                  <option value="გარდაბანი"> გარდაბანი </option>
                  <option value="გურჯაანი"> გურჯაანი </option>
                  <option value="დედოფლისწყარო"> დედოფლისწყარო </option>
                  <option value="დმანისი"> დმანისი </option>
                  <option value="დუშეთი"> დუშეთი </option>
                  <option value="ვანი"> ვანი </option>
                  <option value="ზესტაფონი"> ზესტაფონი </option>
                  <option value="თეთრიწყარო"> თეთრიწყარო </option>
                  <option value="თერჯოლა"> თერჯოლა </option>
                  <option value="კასპი"> კასპი </option>
                  <option value="ლაგოდეხი"> ლაგოდეხი </option>
                  <option value="ლანჩხუთი"> ლანჩხუთი </option>
                  <option value="მანგლისი"> მანგლისი </option>
                  <option value="მარნეული"> მარნეული </option>
                  <option value="მარტვილი"> მარტვილი </option>
                  <option value="მესტია"> მესტია </option>
                  <option value="მცხეთა"> მცხეთა </option>
                  <option value="ნინოწმინდა"> ნინოწმინდა </option>
                  <option value="ოზურგეთი"> ოზურგეთი </option>
                  <option value="ონი"> ონი </option>
                  <option value="საგარეჯო"> საგარეჯო </option>
                  <option value="სამტრედია"> სამტრედია </option>
                  <option value="საჩხერე"> საჩხერე </option>
                  <option value="სენაკი"> სენაკი </option>
                  <option value="სიღნაღი"> სიღნაღი </option>
                  <option value="ტყიბული"> ტყიბული </option>
                  <option value="ფოთი"> ფოთი </option>
                  <option value="ქარელი"> ქარელი </option>
                  <option value="ქობულეთი"> ქობულეთი </option>
                  <option value="ყაზბეგი"> ყაზბეგი </option>
                  <option value="ყვარელი"> ყვარელი </option>
                  <option value="ცაგერი"> ცაგერი </option>
                  <option value="ცხინვალი"> ცხინვალი </option>
                  <option value="წალენჯიხა"> წალენჯიხა </option>
                  <option value="წალკა"> წალკა </option>
                  <option value="წნორი"> წნორი </option>
                  <option value="წყალტუბო"> წყალტუბო </option>
                  <option value="ჭიათურა"> ჭიათურა </option>
                  <option value="ხაშური"> ხაშური </option>
                  <option value="ხევსურეთი"> ხევსურეთი </option>
                  <option value="ხელვაჩაური"> ხელვაჩაური </option>
                  <option value="ხობი"> ხობი </option>
                  <option value="ხონი"> ხონი </option>
                  <option value="ვალე"> ვალე </option>
                  <option value="ხონის მუნიციპალიტეტი">
                    ხონის მუნიციპალიტეტი
                  </option>
                  <option value="ამბროლაურის მუნიციპალიტეტი">
                    ამბროლაურის მუნიციპალიტეტი
                  </option>
                  <option value="ხულოს მუნიციპალიტეტი">
                    ხულოს მუნიციპალიტეტი
                  </option>
                  <option value="ადიგენის მუნიციპალიტეტი">
                    ადიგენის მუნიციპალიტეტი
                  </option>
                  <option value="ხაშურის მუნიციპალიტეტი">
                    ხაშურის მუნიციპალიტეტი
                  </option>
                  <option value="ახალციხის მუნიციპალიტეტი">
                    ახალციხის მუნიციპალიტეტი
                  </option>
                  <option value="ხელვაჩაურის მუნიციპალიტეტი">
                    ხელვაჩაურის მუნიციპალიტეტი
                  </option>
                  <option value="ხობის მუნიციპალიტეტი">
                    ხობის მუნიციპალიტეტი
                  </option>
                  <option value="ქუთაისის მუნიციპალიტეტი">
                    ქუთაისის მუნიციპალიტეტი
                  </option>
                  <option value="ახალგორის მუნიციპალიტეტი">
                    ახალგორის მუნიციპალიტეტი
                  </option>
                  <option value="მცხეთის მუნიციპალიტეტი">
                    მცხეთის მუნიციპალიტეტი
                  </option>
                  <option value="ოზურგეთის მუნიციპალიტეტი">
                    ოზურგეთის მუნიციპალიტეტი
                  </option>
                  <option value="საგარეჯოს მუნიციპალიტეტი">
                    საგარეჯოს მუნიციპალიტეტი
                  </option>
                  <option value="მესტიის მუნიციპალიტეტი">
                    მესტიის მუნიციპალიტეტი
                  </option>
                  <option value="სიღნაღის მუნიციპალიტეტი">
                    სიღნაღის მუნიციპალიტეტი
                  </option>
                  <option value="ახალქალაქის მუნიციპალიტეტი">
                    ახალქალაქის მუნიციპალიტეტი
                  </option>
                  <option value="მარტვილის მუნიციპალიტეტი">
                    მარტვილის მუნიციპალიტეტი
                  </option>
                  <option value="ტყიბულის მუნიციპალიტეტი">
                    ტყიბულის მუნიციპალიტეტი
                  </option>
                  <option value="ქარელის მუნიციპალიტეტი">
                    ქარელის მუნიციპალიტეტი
                  </option>
                  <option value="ლენტეხის მუნიციპალიტეტი">
                    ლენტეხის მუნიციპალიტეტი
                  </option>
                  <option value="ლანჩხუთის მუნიციპალიტეტი">
                    ლანჩხუთის მუნიციპალიტეტი
                  </option>
                  <option value="ლაგოდეხის მუნიციპალიტეტი">
                    ლაგოდეხის მუნიციპალიტეტი
                  </option>
                  <option value="კასპის მუნიციპალიტეტი">
                    კასპის მუნიციპალიტეტი
                  </option>
                  <option value="ქობულეთის მუნიციპალიტეტი">
                    ქობულეთის მუნიციპალიტეტი
                  </option>
                  <option value="ყაზბეგის მუნიციპალიტეტი">
                    ყაზბეგის მუნიციპალიტეტი
                  </option>
                  <option value="თერჯოლის მუნიციპალიტეტი">
                    თერჯოლის მუნიციპალიტეტი
                  </option>
                  <option value="ყვარლის მუნიციპალიტეტი">
                    ყვარლის მუნიციპალიტეტი
                  </option>
                  <option value="თეთრიწყაროს მუნიციპალიტეტი">
                    თეთრიწყაროს მუნიციპალიტეტი
                  </option>
                  <option value="თელავის მუნიციპალიტეტი">
                    თელავის მუნიციპალიტეტი
                  </option>
                  <option value="შუახევის მუნიციპალიტეტი">
                    შუახევის მუნიციპალიტეტი
                  </option>
                  <option value="ჩოხატაურის მუნიციპალიტეტი">
                    ჩოხატაურის მუნიციპალიტეტი
                  </option>
                  <option value="ზუგდიდის მუნიციპალიტეტი">
                    ზუგდიდის მუნიციპალიტეტი
                  </option>
                  <option value="ზესტაფონის მუნიციპალიტეტი">
                    ზესტაფონის მუნიციპალიტეტი
                  </option>
                  <option value="ვანის მუნიციპალიტეტი">
                    ვანის მუნიციპალიტეტი
                  </option>
                  <option value="ახმეტის მუნიციპალიტეტი">
                    ახმეტის მუნიციპალიტეტი
                  </option>
                  <option value="ბაღდათის მუნიციპალიტეტი">
                    ბაღდათის მუნიციპალიტეტი
                  </option>
                  <option value="ბოლნისის მუნიციპალიტეტი">
                    ბოლნისის მუნიციპალიტეტი
                  </option>
                  <option value="ბორჯომის მუნიციპალიტეტი">
                    ბორჯომის მუნიციპალიტეტი
                  </option>
                  <option value="ხარაგაულის მუნიციპალიტეტი">
                    ხარაგაულის მუნიციპალიტეტი
                  </option>
                  <option value="გარდაბნის მუნიციპალიტეტი">
                    გარდაბნის მუნიციპალიტეტი
                  </option>
                  <option value="გორის მუნიციპალიტეტი">
                    გორის მუნიციპალიტეტი
                  </option>
                  <option value="წალკის მუნიციპალიტეტი">
                    წალკის მუნიციპალიტეტი
                  </option>
                  <option value="გურჯაანის მუნიციპალიტეტი">
                    გურჯაანის მუნიციპალიტეტი
                  </option>
                  <option value="წალენჯიხის მუნიციპალიტეტი">
                    წალენჯიხის მუნიციპალიტეტი
                  </option>
                  <option value="დედოფლისწყაროს მუნიციპალიტეტი">
                    დედოფლისწყაროს მუნიციპალიტეტი
                  </option>
                  <option value="დუშეთის მუნიციპალიტეტი">
                    დუშეთის მუნიციპალიტეტი
                  </option>
                  <option value="ასპინძის მუნიციპალიტეტი">
                    ასპინძის მუნიციპალიტეტი
                  </option>
                  <option value="ცაგერის მუნიციპალიტეტი">
                    ცაგერის მუნიციპალიტეტი
                  </option>
                  <option value="აბაშის მუნიციპალიტეტი">
                    აბაშის მუნიციპალიტეტი
                  </option>
                  <option value="ჩხოროწყუს მუნიციპალიტეტი">
                    ჩხოროწყუს მუნიციპალიტეტი
                  </option>
                  <option value="წყალტუბოს მუნიციპალიტეტი">
                    წყალტუბოს მუნიციპალიტეტი
                  </option>
                  <option value="სამტრედიის მუნიციპალიტეტი">
                    სამტრედიის მუნიციპალიტეტი
                  </option>
                  <option value="მარნეულის მუნიციპალიტეტი">
                    მარნეულის მუნიციპალიტეტი
                  </option>
                  <option value="ქედის მუნიციპალიტეტი">
                    ქედის მუნიციპალიტეტი
                  </option>
                  <option value="თიანეთის მუნიციპალიტეტი">
                    თიანეთის მუნიციპალიტეტი
                  </option>
                </select>
                <input
                  type="text"
                  placeholder="ქუჩის სახელი..."
                  onFocus={handlePlaceSelect}
                  style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                />
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={position || center}
                  zoom={position ? 17 : 12}
                >
                  {position && <Marker position={position} />}
                </GoogleMap>
              </div>
            </LoadScript>
          </div>
        </div>
      </div>
    </>
  );
}
