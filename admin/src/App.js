import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { hotelInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import { userColumns, hotelColumns } from "./datatablesource";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectRoute>
                  <Home />
                </ProtectRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectRoute>
                    <List columns={userColumns} />
                  </ProtectRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectRoute>
                    <Single />
                  </ProtectRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectRoute>
                    <List columns={hotelColumns} />
                  </ProtectRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectRoute>
                    <Single />
                  </ProtectRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectRoute>
                    <New inputs={hotelInputs} title="Add New Hotel" />
                  </ProtectRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
