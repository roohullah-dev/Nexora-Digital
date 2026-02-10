// import React, { useEffect } from "react";
// import assets from "../assets/assets";

// const ThemeToggleBtn = ({ theme, setTheme }) => {
//   // NOT WORKING 39-44mnts
//   useEffect(() => {
//     if (theme === "light") {
//       document.documentElement.classList.add("light");
//     } else {
//       document.documentElement.classList.remove("light");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   useEffect(() => {
//     const preferDarkMode = window.matchMedia(
//       "(prefers-color-scheme: dark",
//     ).matches;
//     setTheme(theme || (preferDarkMode ? "dark" : "light"));
//   }, []);
//   return (
//     <>
//       <button>
//         {theme === "dark" ? (
//           <img
//             onClick={() => setTheme("light")}
//             src={assets.sun_icon}
//             className="size8.5
//    p-1.5 border border-r-gray-500 rounded-full cursor-pointer button"
//           />
//         ) : (
//           <img
//             src={assets.moon_icon}
//             alt=""
//             onClick={() => setTheme("dark")}
//             className="size8.5
//    p-1.5 border border-r-gray-500 rounded-full cursor-pointer button"
//           />
//         )}
//       </button>
//     </>
//   );
// };

// export default ThemeToggleBtn;

import { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  // Apply dark mode to DOM
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Initial theme (localStorage > system)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    setTheme(savedTheme || (prefersDark ? "dark" : "light"));
  }, []);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        className="size-8 p-1.5 border border-gray-500 rounded-full cursor-pointer darkMode"
        alt=""
      />
    </button>
  );
};

export default ThemeToggleBtn;
