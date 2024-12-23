import {HiMenuAlt4} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import React from "react"

import logo from "../images/logo.png"


const NavBarItem = ({title, classProps}) => {
    return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
    </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center border border-blue-500">
                <img src={logo} alt="logo" className="w-32 cursor-pointer border border-red-500"/>
            </div>
            <ul className="text-white md:flex hidden list-none justify-between items-center">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>

            <div className="flex relative">
                {toggleMenu ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)}/>
                 : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)}/>
                }

                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col jutify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} className="cursor-pointer"/>
                        </li>

                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <NavBarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar;