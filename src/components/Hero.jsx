import { useState, useEffect } from "react";
import Button from "./Button";
import { excited_young_girl, hero_union1, magic_star } from "../assets";
import { hero_union2 } from "../assets";
import { sunglasses_man } from "../assets";

//Single Box
const Box = ({ content, style, movement }) => (
    <div
        style={{ transform: movement }}
        className={`${style} text-box md:flex hidden items-center justify-center rounded-[10px] px-3.5 py-6 bg-white absolute z-20`}>
        <p className="font-manrope font-semibold text-[14px] text-[#757095]">
            {content}
        </p>
    </div>
);

const Hero = () => {
    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section
            id="home"
            className="md:h-[75vh] flex sm:flex-row flex-col items-center justify-center md:py-[5rem] py-[2rem]">
            {/* HeroInfo */}
            <div className="flex flex-1 flex-col sm:items-start items-center">
                <h1 className="font-inter font-bold text-hero sm:text-[55px] text-[50px] sm:text-left text-center md:mb-[5rem] mb-[2rem]">
                    The first super <br className="md:block hidden" />{" "}
                    application is <br className="md:block hidden" /> integrated{" "}
                    <br className="md:block hidden" />
                    informatinon
                </h1>

                <Button
                    style={"h-[64px] w-[233px] light-shadow"}
                    text={"Get Started"}
                />
            </div>
            {/* HeroImage */}
            <div className="flex-1 relative h-auto flex items-center justify-center sm:w-[70%]  sm:mt-0 mt-[5rem]">
                {/* Circles */}
                <div className="hero-circle sm:w-[317px] sm:h-[317px] absolute top-0 left-[15%] bg-[#5D5FEF] opacity-[0.39] rounded-full -z-10"></div>
                <div className="hero-circle sm:w-[305px] sm:h-[305px] absolute bottom-[5%] right-0 bg-[#EAAFC8A6] opacity-[0.65] rounded-full -z-10"></div>

                {/* Image */}
                <img
                    src={excited_young_girl}
                    alt="excite_young_girl"
                    className="z-10 w-[338px] h-[451px]"
                />

                {/* BlurBox */}
                <div className="blur-box sm:w-[432px] w-[100%] h-[127px] rounded-[16px] absolute bottom-[-2%] sm:left-[8%] md:left-[17%] left-0 flex flex-row items-center justify-center gap-4 z-20 sm:px-6 px-1">
                    <img
                        src={magic_star}
                        alt="magic_star"
                        className="object-contain"
                    />
                    <p className="font-poppins font-normal text-[18px] leading-[26px] sm:max-w-[282px]">
                        The first integrated notification super application
                    </p>
                </div>

                {/* TextBoxes */}
                <div
                    style={{
                        transform: `translate(${mousePos.y / 80}px, ${
                            mousePos.y / 50
                        }px)`,
                    }}
                    className="text-box md:flex hidden gap-2 p-3 rounded-[10px] w-[206px] absolute z-[30] md:left-[-12%] md:top-[15%]">
                    <div className="w-[54px] h-[54px] rounded-full">
                        <img
                            src={sunglasses_man}
                            alt="sunglasses_man"
                            className="objec-contain w-[100%] h-[100%]"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-between">
                        <span className="flex items-center justify-center h-[26px] w-[86px] rounded-[100vw] bg-[#e1e1ee]">
                            <p className="text-primary font-inter text-[15px] font-bold ">
                                + 28,900
                            </p>
                        </span>
                        <p className="font-manrope font-semibold text-[14px] text-[#757095]">
                            follow
                        </p>
                    </div>
                </div>

                <Box
                    content={"Search quickly and purposefully"}
                    style={"top-[-3%] left-5"}
                    movement={`translate(${-mousePos.x / 100}px, ${
                        -mousePos.y / 120
                    }px)`}
                />

                <Box
                    content={"Get credit from companies"}
                    style={"top-[11%] right-[-13px]"}
                    movement={`translate(${mousePos.x / 70}px, ${
                        -mousePos.y / 50
                    }px)`}
                />

                <Box
                    content={"Get service from the best"}
                    style={`bottom-[45%] right-[-8%]`}
                    movement={`translate(${-mousePos.x / 60}px, ${
                        mousePos.y / 30
                    }px)`}
                />
            </div>

            {/* UnionPattern */}
            <img
                src={hero_union2}
                alt="union_pattern"
                className="absolute w-[100vw] h-[70%] oject-cover top-[13%] left-[0] pointer-events-none z-[-1]"
            />
            <img
                src={hero_union1}
                alt="union_pattern"
                className="absolute w-[100vw] h-[70%] object-cover bottom-[6%] left-[0] pointer-events-none z-[-1]"
            />
        </section>
    );
};

export default Hero;
