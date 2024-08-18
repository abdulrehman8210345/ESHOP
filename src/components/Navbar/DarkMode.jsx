import { useEffect, useState } from "react";
import darkMode from "../../assets/dark-mode-button.png";
import lightMode from "../../assets/light-mode-button.png";
const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const htmlElement = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme",theme)
    if(theme === "dark") {
        htmlElement.classList.add("dark")
    }
    else{
        htmlElement.classList.remove("dark")
    }
   
  })
  
  return (
    <div className="relative">
      <img
        src={lightMode}
        className={`w-12 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        } cursor-pointer transition-all duration-300 absolute right-0 z-10`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        alt=""
      />
      <img
        src={darkMode}
        className={`w-12 cursor-pointer`}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};

export default DarkMode;
