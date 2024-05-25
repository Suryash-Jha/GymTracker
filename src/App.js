import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
// src/index.js or src/App.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';
import WeeklySchedulerForm from './pages/WeeklySchedulerForm';


function App() {
  firebase.initializeApp(firebaseConfig);
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="scheduler" element={<WeeklySchedulerForm />} />
          {/*           <Route path="daily-tracker" element={<Blogs />} />
          <Route path="overall-stats" element={<Blogs />} />
          <Route path="setting" element={<Blogs />} /> 
          <Route path="*" element={<NoPage />} />
          */}
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
