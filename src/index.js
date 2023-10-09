import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import reportWebVitals from "./reportWebVitals";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import userQueries from "./services/API/user";

import MainLayout from "./components/layouts/mainLayout";

import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";

const queryClient = new QueryClient();

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false });

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: userQueries.getUserInfo,
    staleTime: Infinity,
    retry: false,
  });

  useEffect(() => {
    if (userQuery.isSuccess) {
      setUser({ ...user, loggedIn: true, ...userQuery.data });
    }
  }, [userQuery.isSuccess]);

  if (userQuery.isFetching) {
    return <div>Loading...</div>;
  }

  if (userQuery.isError) {
    window.location.href = "/login";
    return null;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
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
