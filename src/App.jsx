import Home from "./Components/Home";
import "./App.css";
import VolunteerForm from "./Components/VolunteerForm";
import About from "./Components/About";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className="Container">
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "Home" && <Home></Home>}
        {selectedTab === "About Us" && <About></About>}
        {selectedTab === "Become a Volunteer" && (
          <VolunteerForm></VolunteerForm>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
