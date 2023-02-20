import "./Login.css";
import Auth from "./Auth";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";

function Login() {
  const REST_API_KEY = "eed05550f179f5743acc31da1d5ff2c1";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    
      <div className="App">
        <Routes>
          <Route exact path="*" href={KAKAO_AUTH_URL} >
             Kakao Login
          </Route>
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </div>
    
  );
}

export default Login;