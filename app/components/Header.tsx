'use client'
import { MdSettingsBrightness } from "react-icons/md";
import { IconContext } from "react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className="navbar fixed flex w-full justify-center items-center backdrop-blur h-12 mb-12 relative">
            <ul className="inline-flex list-none justify-between items-center ml-3">
                <Link href="/"><li>Accueil</li></Link>
                <Link href="/projets"><li>Projets</li></Link>
                <Link href="https://github.com/SamiNassim"><li>Github</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
            </ul>
            <div className="darkmode">
                <IconContext.Provider value={{ size: "30px" }}>
                    <MdSettingsBrightness className="cursor-pointer darkmode" onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Header