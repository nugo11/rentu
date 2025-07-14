
import Carusel from "./comp/carosuel";
import Carusel1 from "./comp/carousel-news";
import Services from "./comp/services";
import Promo from "./comp/promo";
import Popular from "./comp/popular";

export default function Home() {
  return (
      <div className="min-posts">
        <Carusel />
        <Services />
        <Carusel1 />
        <Promo />
        <Popular />
      </div>
  );
}
