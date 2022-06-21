import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import Pricing from "./components/Home/Pricing";
import ProfileForm from "./components/Dashboard/ProfileForm";
import SearchInterviews from "./components/Dashboard/SearchInterviews";
import Footer from "./Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Home/Login";
import Signupstudent from "./components/Home/Signupstudent";
import Signupprofessional from "./components/Home/Signupprofessional";
import SentRequests from "./components/Dashboard/SentRequests";
import UpcomingInterviews from "./components/Dashboard/UpcomingInterviews";
import InterviewerProfileForm from "./components/Interviewer/InterviewerProfileForm";
import InterviewerDashboard from "./components/Interviewer/InterviewerDashboard";
import AcceptedRequests from "./components/Dashboard/AcceptedRequests";
import CompletedInterviews from "./components/Dashboard/CompletedInterviews";
import { useEffect, useState } from "react";
import axios from "axios";

// Color Code is
// Hex: #00b0f0
// RGB: rgba(0,176,240,255)

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(
          "http://localhost:8585/auth/login/g/success",
          { withCredentials: true }
        );
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);
  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(
          "http://localhost:8585/auth/login/f/success",
          { withCredentials: true }
        );
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);
  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(
          "http://localhost:8585/auth/login/l/success",
          { withCredentials: true }
        );
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);
  return (
    <div className="App">
      <Login />
      <Signupstudent />
      <Signupprofessional />
      <Routes>
        <Route
          path="/"
          element={user ? <SearchInterviews user={user} /> : <Home />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route
          path="/profile-form"
          element={user ? <ProfileForm user={user} /> : <Home />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
        />
        <Route path="/searching" element={<SearchInterviews />} />
        <Route path="/sent-requests" element={<SentRequests />} />
        <Route path="/accepted-requests" element={<AcceptedRequests />} />
        <Route path="/upcoming-interviews" element={<UpcomingInterviews />} />
        <Route path="/completed-interviews" element={<CompletedInterviews />} />
        <Route
          path="/interviewer-profile-form"
          element={<InterviewerProfileForm />}
        />
        <Route
          path="/interviewer-dashboard"
          element={<InterviewerDashboard />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
