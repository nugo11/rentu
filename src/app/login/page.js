"use client";
import "./login.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function LoginPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setPassword1("");
    setFirstName("");
    setLastName("");
    setGender("");
    setPhone("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError("გთხოვთ, გადაამოწმოთ ელფოსტა და დაადასტუროთ რეგისტრაცია...");
        setLoading(false);
        return;
      }

      router.push("/");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        gender,
        phone,
        email,
        createdAt: new Date(),
      });

      await sendEmailVerification(user);

      setInfo(
        "რეგისტრაცია წარმატებით დასრულდა. გთხოვთ, გადაამოწმოთ ელფოსტა. (თუ შეტყობინებას ვერ ნახულობთ, შეამოწმეთ Spam)"
      );
      resetForm();
      setIsRegistering(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  return (
    <div className="login-page">
      <div className="login-bx-r"></div>
      <div
        className="login-box"
        id={isRegistering ? "fade-in-element" : "fade-in-element2"}
      >
        <a href="/">
          <h1>{isRegistering ? "RENTU რეგისტრაცია" : "RENTU ავტორიზაცია"}</h1>
        </a>

        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <input
            type="email"
            placeholder="ელ.ფოსტა"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="პაროლი"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isRegistering && (
            <>
              <span
                id="pasrul"
                style={
                  hasUppercase && password.length >= 8 && hasNumber
                    ? { display: "none" }
                    : undefined
                }
              >
                პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, დიდ და პატარა ასოებს,
                რიცხვებს
              </span>

              <input
                type="password"
                placeholder="გაიმეორე პაროლი"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                className={
                  password !== password1 && password1 !== ""
                    ? "input-error"
                    : password1 === password && password1 !== ""
                    ? "input-chack"
                    : undefined
                }
                required
              />
              <input
                type="text"
                placeholder="სახელი"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="გვარი"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <select
                value={gender}
                id="genderchange"
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">აირჩიე სქესი</option>
                <option value="მამრობითი">მამრობითი</option>
                <option value="მდედრობითი">მდედრობითი</option>
              </select>
              <input
                type="tel"
                placeholder="ტელეფონის ნომერი"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </>
          )}

          <button type="submit" disabled={loading}>
            {loading
              ? isRegistering
                ? "მიმდინარეობს რეგისტრაცია..."
                : "ავტორიზაცია..."
              : isRegistering
              ? "რეგისტრაცია"
              : "შესვლა"}
          </button>
        </form>

        <div className="separator">ან</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
          Google-ით {isRegistering ? "რეგისტრაცია" : "შესვლა"}
        </button>

        {error && (
          <p className="error">
            {error == "Firebase: Error (auth/email-already-in-use)."
              ? "მეილი სისტემაში უკვე რეგისტრირებულია"
              : error == "Firebase: Error (auth/invalid-credential)."
              ? "მეილი ან პაროლი არასწორია"
              : error}
          </p>
        )}
        {info && <p className="info">{info}</p>}

        <p className="signup-link">
          {isRegistering ? "უკვე გაქვს ანგარიში?" : "არ გაქვს ანგარიში?"}{" "}
          <button
            onClick={() => {
              setIsRegistering(!isRegistering);
              setError("");
              setInfo("");
            }}
            className="link-button"
          >
            {isRegistering ? "შესვლა" : "რეგისტრაცია"}
          </button>
        </p>
      </div>
    </div>
  );
}
