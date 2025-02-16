import React, { useState, useEffect } from "react";
import CardBox from "./components/CardBox";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <div className="flex-grow-1">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
            <CircularProgress />
          </div>
        ) : (
          <CardBox />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
