'use client';
import { usePathname } from "next/navigation";
import { Noto_Sans_Georgian } from "next/font/google";

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["latin", "georgian"],
  weight: ["400", "700"],
  display: "swap",
});



export default function LoginLayout({ children }) {

  const pathname = usePathname();
  const isLoginPage = pathname === "/login";


  return (
    <html lang="ka">
      <body className={notoSansGeorgian.className} id={isLoginPage ? "login-page" : ""}>
        {children}
      </body>
    </html>
  );
}