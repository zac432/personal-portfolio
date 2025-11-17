import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utlis.js";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // this one is for if you click the page and choose dark mode if you open it again
    // it will only show dark mode no light mode unless u change it thanks to local storage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
         setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);

    }
}

    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
            )}>
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-gray-900 fill-gray-300"/>
            )}
        </button>
    );
};