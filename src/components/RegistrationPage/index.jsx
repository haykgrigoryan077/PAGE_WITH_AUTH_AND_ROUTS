import { validationForNewAccountPasswordAndEmail } from "../../validationFunction";
import Input from "antd/lib/input/Input";
import "./style.css";
import { userLoginData } from "../../context/usersData";
import { useNavigate } from "react-router-dom";
import { ALREADY_SIGNED_UP, NOT_VALID_PASSWORD, VALID_PASSWORD } from "../../validationFunction/cases";
import { notification } from "antd";
import { useContext } from "react";
import { UserProfileContext } from "../UserProfileDataProvider";

const RegistrationPage = () => {

  const context = useContext(UserProfileContext)
  const navigate = useNavigate()
  console.log(context);

  return (
    <div className="registrationPageWrapper">
      <div className="title">
        <h1 className="titleText">Registration</h1>
      </div>
      <form
        className="inputsWrapper"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].value, e.target[1].value);
          if (validationForNewAccountPasswordAndEmail(e.target[0].value, e.target[1].value, userLoginData) === VALID_PASSWORD) {
            context.setProfileData((prev) => {
              return [
                ...prev,
                {
                  email: e.target[0].value,
                  password: e.target[1].value
                }
              ]
            })
            navigate('/')
          } else if (validationForNewAccountPasswordAndEmail(e.target[0].value, e.target[1].value, userLoginData) === ALREADY_SIGNED_UP) {
            notification.info({
              message: "Warning",
              description: "Already Signed Up",
            })
          } else if (validationForNewAccountPasswordAndEmail(e.target[0].value, e.target[1].value, userLoginData) === NOT_VALID_PASSWORD) {
            notification.info({
              message: "Warning",
              description: "Password Is Not Valid"
            })
          }
        }}
      >
        <Input
          style={{ width: "200px", height: "30px", margin: "5px" }}
          type="email"
          placeholder="Email"
          name="newEmail"
        />
        <Input
          style={{ width: "200px", height: "30px", margin: "5px" }}
          type="text"
          placeholder="Password"
          name="newEmail"
        />
        <Input
          type="submit"
          style={{ width: "200px", height: "30px", margin: "5px" }}
          value={"Submit"}
        />
      </form>
      <footer className="footer">Handcrafted By Hayk Grigoryan</footer>
    </div>
  );
};

export default RegistrationPage;
