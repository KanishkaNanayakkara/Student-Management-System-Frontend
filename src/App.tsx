import React, { useState } from "react";
import { MoonIcon } from "./icons/Moon";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);

  function toggleDarkMode() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }

  return <h1>Hello!</h1>
}

export default App;
