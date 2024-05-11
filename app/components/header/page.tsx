"use client";
import { useState } from "react";
import React from "react";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToExperiences = () => {
    const experiencesSection = document.querySelector("#experiences");
    if (experiencesSection) {
      const offset = 320; // Adjust this value as needed
      const topPos =
        experiencesSection.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      const offset = 190; // Adjust this value as needed
      const topPos =
        projectsSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [iconState, setIconState] = useState("list"); // State to track the icon state

  const handleNav = () => {
    setMenuOpen(!menuOpen);
    setIconState((prevState) => (prevState === "list" ? "close" : "list")); // Toggle icon state
  };

  return (
    <div className="sticky top-0  bg-jGrey">
      <div className="container h-[3rem] flex items-center font-bold">
        <div className="pl-8 inline-block">HOME</div>
        <div className="pl-8 inline-block">TECHNICAL EXPERIENCE</div>
        <div className="pl-8 inline-block">PROJECTS</div>
      </div>
    </div>
  );
};

export default Header;
