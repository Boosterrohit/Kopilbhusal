import React from "react";
import Header from "../../../Component/Home/Header";
import Linkedin from "../../../Component/Home/Linkedin";
import Skill from "../../../Component/Home/Skill";
import SayHello from "../../../Component/Home/SayHello";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Linkedin />
      <Skill />
      <SayHello />
    </main>
  );
};

export default Home;
