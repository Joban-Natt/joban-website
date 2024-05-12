"use client";
import { relative } from "path";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const CopyToClipboard = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }

  const alert = () => {
    try {
      copyText("jobanpreet.natt@uwaterloo.ca");

      toast.success("Copied to clipboard", {
        position: "top-right",
        autoClose: 800,
        theme: "dark",
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="bg-jred mt-4 px-4 mr-4 rounded-[12px] duration-75 hover:bg-jhred hover:scale-105 hover:duration-75 active:scale-95">
      <button onClick={alert}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          fill="currentColor"
          className="inline-block"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
        </svg>
        <p className="pl-1 inline-block align-middle text-[1rem] sm:text-[0.75rem] md:text-[1rem] lg:text-[1.25rem]">
          jobanpreet.natt@uwaterloo.ca
        </p>
      </button>
    </div>
  );
};

export default CopyToClipboard;
