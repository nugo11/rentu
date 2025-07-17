"use client";
import { MdOutlineArticle } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { FiHelpCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { CiCirclePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  const [user, setUser] = useState(null);
  const [showProfileAjax, setShowProfileAjax] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };


  return (
    <>
     {isLoginPage ? undefined : <div className="header">
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
              {user ? (
                <div className="profbut">
                  <a
                    onClick={() => setShowProfileAjax(prev => !prev)}
                    id="logbut"
                    style={{ cursor: "pointer" }}
                  >
                    პროფილი
                  </a>
                  <div id={showProfileAjax ? "falsehid" : undefined} className="profileajax">
                    <ul>
                      <li>
                        <CiCirclePlus />
                        განცხადების დამატება
                      </li>
                      <li>
                        <CgProfile />
                        ჩემი პროფილი
                      </li>
                      <li>
                        <MdOutlineArticle />
                        ჩემი განცხადებები
                      </li>
                      <li>
                        <CiBookmark />
                        შენახული განცხადებები
                      </li>
                      <li style={{ cursor: "pointer" }} onClick={handleLogout}>
                        <IoMdLogOut style={{ color: "red" }} />
                        გასვლა
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <a href="/login" id="logbut">
                  შესვლა
                </a>
              )}
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
      </div>}
    </>
  );
}
