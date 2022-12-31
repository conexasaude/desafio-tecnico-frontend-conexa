import React, { useEffect } from "react";
import { API } from "../../services/api";

const Home: React.FC = () => {
  useEffect(() => {
    const data = API.get("/consultations?_expand=patient");
    console.log("data", data);
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
