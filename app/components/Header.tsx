'use client'
import { MdOutlineMenu, MdLightbulb } from "react-icons/md";
import { IconContext } from "react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [open, setOpen] = useState(false);

    function toggleDrawer() {
        if (open) {
            document.getElementById("drawer")!.style.width = "0px";
            document.getElementById("drawer")!.style.visibility = "hidden";
            setOpen(false);
        }
        else {
            document.getElementById("drawer")!.style.width = "170px";
            document.getElementById("drawer")!.style.visibility = "unset";
            setOpen(true);
        }
    }

    function closeDrawer() {
        document.getElementById("drawer")!.style.width = "0px";
        document.getElementById("drawer")!.style.visibility = "hidden";
        setOpen(false);
    }

    return (
        <header>
            <div className="navbar fixed flex w-full justify-center items-center backdrop-blur h-12 mb-12">
                <ul className="inline-flex list-none justify-between items-center ml-3">
                    <Link href="/"><li className="li__desk">Accueil</li></Link>
                    <Link href="/projets"><li className="li__desk">Projets</li></Link>
                    <Link href="https://github.com/SamiNassim" target="_blank"><li className="li__desk">Github</li></Link>
                    <Link href="/contact"><li className="li__desk">Contact</li></Link>
                </ul>
                <div>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <MdLightbulb className="darkmode cursor-pointer mr-4" onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} />
                    </IconContext.Provider>
                </div>
            </div>
            <div className="navbar__mobile fixed hidden w-full justify-end items-center backdrop-blur h-12 mb-12">
                <div>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <MdLightbulb className="darkmode cursor-pointer mr-4" onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} />
                    </IconContext.Provider>
                </div>
                <div>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <MdOutlineMenu className="burger cursor-pointer mr-4" onClick={toggleDrawer} />
                    </IconContext.Provider>
                </div>
                <div className="drawer" id="drawer">
                    <ul className="ul__mobile flex flex-col list-none justify-between items-center">
                        <Link href="/" onClick={closeDrawer}><li className="li__mobile">Accueil</li></Link>
                        <Link href="/projets" onClick={closeDrawer}><li className="li__mobile">Projets</li></Link>
                        <Link href="https://github.com/SamiNassim" onClick={closeDrawer} target="_blank"><li className="li__mobile">Github</li></Link>
                        <Link href="/contact" onClick={closeDrawer}><li className="li__mobile">Contact</li></Link>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header