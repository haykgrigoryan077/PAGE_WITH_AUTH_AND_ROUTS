import "./App.css";
import LoginPage, { LoginProvider } from "./LoginPage";
import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RegistrationPage from "./components/RegistrationPage";
import UserProfileDataProvider from "./components/UserProfileDataProvider";
import { routers } from "./routers";

function App() {
  
  return (
    <UserProfileDataProvider>
      <LoginProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Layout />}>
              {routers.map(({ path, element }) => (
                <Route path={path} element={element} key={element + path}/>
              ))}
            </Route>
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </div>
      </LoginProvider>
    </UserProfileDataProvider>
  );
}

export default App;
