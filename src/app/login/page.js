'use client';
import './login.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
        <div className="login-bx-r">

        </div>
      <div className="login-box">
        <a href="/"><h1>RENTU</h1></a>
        <form onSubmit={handleLogin}>
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
          <button type="submit">შესვლა</button>
        </form>
        <div className="separator">ან</div>
        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
          Google-ით შესვლა
        </button>

        {error && <p className="error">{error}</p>}

        <p className="signup-link">
          არ გაქვს ანგარიში? <a href="/signup">დარეგისტრირდი</a>
        </p>
      </div>
    </div>
  );
}
