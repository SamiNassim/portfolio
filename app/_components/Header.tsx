'use client'
import { MdSettingsBrightness } from "react-icons/md";
import { IconContext } from "react-icons";
import { useTheme } from "next-themes";

function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className="navbar fixed flex w-full justify-center items-center">
            <ul className="inline-flex list-none justify-between w-1/2">
                <li>Accueil</li>
                <li>Projets</li>
                <li>Github</li>
                <li>Contact</li>
            </ul>
            <IconContext.Provider value={{ size: "30px" }}>
                <MdSettingsBrightness onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} />
            </IconContext.Provider>
        </div>
    )
}

export default Header