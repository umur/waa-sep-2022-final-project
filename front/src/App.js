import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Sign from "./components/Sign";
import RentProperty from "./components/RentProperty";
import OwnerDashboard from "./components/OwnerDashboard";
import AddProperty from "./components/AddProperty";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Sign/>} />
            <Route path="/rent" element={<RentProperty/>} />
            <Route path="/owner" element={<OwnerDashboard/>} />
            <Route path="/add" element={<AddProperty/>} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
