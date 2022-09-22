import "./style.css";
import { Input, notification } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { validation } from "../validationFunction";
import { userLoginData } from "../context/usersData";
import { UserProfileContext } from "../components/UserProfileDataProvider";

export const LoginContext = React.createContext();

const LoginPage = () => {
  const [emailAndPassInputs, setEmailAndPassInputs] = useState({
    email: "",
    password: "",
  });

  const userData = useContext(UserProfileContext)
  const navigate = useNavigate();
  const context = useContext(LoginContext);
  console.log(userData);

  console.log(context);
  return (
    <div className="loginPageWrapper">
      <h1 className="signIn">Sign In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[1].value);
          if (validation(e.target[0].value, e.target[1].value, userData.profileData)) {
            context.setIsAuth(true);
            navigate("/home");
          } else {
            notification.info({
              message: "Warning",
              description: "Envalid Mail Or Wrong Password",
            });
          }
        }}
      >
        <div className="inputWrapper">
          <Input
            style={{ width: "200px", height: "30px", marginBottom: "10px" }}
            name="email"
            type="email"
            placeholder="email..."
            onChange={(e) => {
              setEmailAndPassInputs((prev) => {
                return {
                  ...prev,
                  [e.target.name]: e.target.value,
                };
              });
            }}
          />
          <Input
            style={{ width: "200px", height: "30px" }}
            name="password"
            type="password"
            placeholder="password..."
            onChange={(e) => {
              setEmailAndPassInputs((prev) => {
                return {
                  ...prev,
                  [e.target.name]: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="register">
          <Input
            style={{ margin: "10px", width: "200px" }}
            type="submit"
            value="submit"
          />
        </div>
        <Input
          type="submit"
          value="Register"
          style={{ margin: "5px", width: "200px" }}
          onClick={() => {
            navigate('/registration')
          }}
        />
      </form>
      <footer className="footer">Handcrafted By Hayk Grigoryan</footer>
    </div>
  );
};

export const LoginProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const obj = { isAuth, setIsAuth };
  return <LoginContext.Provider value={obj}>{children}</LoginContext.Provider>;
};

export default LoginPage;
