import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import reportWebVitals from "./reportWebVitals";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layouts/mainLayout";

import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import userQueries from "./services/API/user";

const queryClient = new QueryClient();

export const UserContext = createContext();
function UserProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false });
  const [fetchingUser, setFetchingUser] = useState(false);

  useEffect(() => {
    setFetchingUser(true);

    userQueries.getUserInfo(
      (data) => {
        setUser({ ...user, loggedIn: true, ...data });
        setFetchingUser(false);
      },
      () => {
        setFetchingUser(false);
      }
    );
  }, []);

  return fetchingUser ? (
    <div>Loading ...</div>
  ) : (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
