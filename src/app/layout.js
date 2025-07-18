import "./globals.css";
import { Noto_Sans_Georgian } from "next/font/google";
import Header from "./comp/header";
import Footer from "./comp/footer";

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["latin", "georgian"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "RENTU: იქირავე ბინები საათობრივად",
  description:
    "შეგიძლიათ დაჯავშნოთ სახლები საათობრივად თქვენს საყვარელ ადგილას, აირჩიეთ 100-ზე მეტი ვარიანტიდან და დაჯავშნეთ საქართველოს მასშტაბით. ისარგებლეთ უამრავი კომფორტული სერვისით.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="ka">
      <body className={notoSansGeorgian.className}>
        <div className="mineWraper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
