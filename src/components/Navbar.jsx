import { logo, us_flag, arrow_down } from "../assets";
import Button from "./Button";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);
    return (
        <nav className="flex justify-center items-center">
            <div className="flex flex-row flex-1 gap-[2.25rem]">
                {/* Logo */}
                <a href="../../">
                    <img src={logo} alt="metawork" />
                </a>
                {/* NavLinks */}
                <ul className="md:flex hidden justify-center items-center gap-[2rem]">
                    {navLinks.map((link) => (
                        <li
                            className="font-manrope font-medium text-[16px]"
                            key={link.title}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Language & ContactButton */}
            <div className="md:flex hidden gap-2">
                {/* Language */}
                <div className="p-3 flex justify-center items-center rounded-[12px] border-[1px] border-[#CBCBCB] cursor-pointer select-language  ">
                    <div className="flex gap-1">
                        <img
                            src={us_flag}
                            alt="US_Flag"
                            className="object-contain"
                        />
                        <p className="font-poppins font-normal text-[12px]">
                            United State
                        </p>
                    </div>
                    <img
                        src={arrow_down}
                        alt="arrow_du"
                        className="object-contain ml-3"
                    />
                </div>
                {/* ContactBUtton */}
                <Button style={"py-3 px-6"} text={"Contact Us"} />
            </div>

            {/* Click To Open Mobile Menu */}
            <div
                className="open-menu w-[30px] cursor-pointer md:hidden block"
                onClick={() => setActive((prev) => !prev)}>
                <span className="w-full h-[3px] bg-primary block mb-1 rounded-[100vw]"></span>
                <span className="w-full h-[3px] bg-primary block mb-1 rounded-[100vw]"></span>
                <span className="w-full h-[3px] bg-primary block mb-1 rounded-[100vw]"></span>
            </div>

            {/* MobileMenu */}
            <div
                className={`menu absolute w-full light-shadow p-4 ${
                    active ? "top-0" : "top-[-200%]"
                } left-0 bg-white z-[100]`}>
                {/* NavLinks */}
                <ul className="flex flex-col items-start gap-[2rem] ">
                    {navLinks.map((link) => (
                        <li
                            className="font-manrope font-medium text-[16px]"
                            key={link.title}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}

                    {/* Click To Close Mobile Menu */}
                    <div
                        className="close-menu w-[30px] cursor-pointer absolute top-[5%] right-[5%]"
                        onClick={() => setActive((prev) => !prev)}>
                        <span className="w-full h-[3px] bg-primary block mb-1 rounded-[100vw] rotate-[45deg] translate-y-1.5"></span>
                        <span className="w-full h-[3px] bg-primary block mb-1 rounded-[100vw] rotate-[-45deg]"></span>
                    </div>

                    {/* Language & ContactButton */}
                    <div className="md:hidden flex gap-2">
                        {/* Language */}
                        <div className="p-3 flex justify-center items-center rounded-[12px] border-[1px] border-[#CBCBCB] cursor-pointer select-language  ">
                            <div className="flex gap-1">
                                <img
                                    src={us_flag}
                                    alt="US_Flag"
                                    className="object-contain"
                                />
                                <p className="font-poppins font-normal text-[12px]">
                                    United State
                                </p>
                            </div>
                            <img
                                src={arrow_down}
                                alt="arrow_du"
                                className="object-contain ml-3"
                            />
                        </div>
                        {/* ContactBUtton */}
                        <Button style={"py-3 px-6"} text={"Contact Us"} />
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
