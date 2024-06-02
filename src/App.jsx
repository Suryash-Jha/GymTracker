import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./firebaseConfig";
import WeeklySchedulerForm from "./pages/WeeklySchedulerForm";

const App: React.FC = () => {
  firebase.initializeApp(firebaseConfig);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="scheduler" element={<WeeklySchedulerForm />} />
          {/* Additional routes can be added here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
