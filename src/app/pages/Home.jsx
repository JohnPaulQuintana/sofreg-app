import React from "react"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Services from "../components/Services"
// import "/assets/css/satoshi.css"
// import "/assets/css/plugins.css"
// import "/assets/css/style.css"
import ProgressScrollButton from "../components/ProgressScrollButton";

const Home = () => {
  return (
    <div className="startup-one">
      {/* Loader */}
      <Loader />

      {/* Cursor */}
      <div className="cursor"></div>

      {/* Progress Scroll Button */}
      <ProgressScrollButton />

      <div id="smooth-wrapper">

        {/* Navbar */}
        <Navbar />
        {/* End of Navbar */}

        {/* Sidebar */}
        <Sidebar />
        {/* End of Sidebar */}

        <div id="smooth-content">

            <main className="main-bg">

              {/* Header */}
              <Header />

              {/* Services */}
              <Services />
            </main>

        </div>
      </div>
    </div>
  );
};

export default Home;
