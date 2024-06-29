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
import TestMe from "./pages/testMe";
import CareerForm from "./pages/CareerForm";
const App = () => {
  firebase.initializeApp(firebaseConfig);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="scheduler" element={<WeeklySchedulerForm />} />
          <Route path="test" element={<TestMe />} />
          <Route path="career" element={<CareerForm />} />
          {/* Additional routes can be added here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
