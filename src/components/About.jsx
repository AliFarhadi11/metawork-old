// Importing Stuff
import { features, features_union } from "../assets";
import BorderButton from "./BorderButton";


const About = () => {
    return (
        <section
            id="about"
            className="flex md:flex-row flex-col items-center md:py-[5rem] py-[2rem]">
            <div className="flex-1 left-r">
                <img src={features} alt="features" className="object-contain" />
            </div>
            <div className="right-r flex flex-col items-start flex-1.5">
                <h4 className="text-primary uppercase font-manrope font-extrabold text-[18px]">
                    Our features
                </h4>
                <h2 className="text-dark font-manrope text-[40px] font-semibold md:my-[1.5rem]">
                    How meta work is work?
                </h2>
                <p className="text-light font-poppins font-normal sm:leading-[26px] leading-[20px]text-[18px] max-w-[594px]">
                    Metawork is a reference super app for all kinds of services,
                    and it was created to quickly meet your needs, and you can
                    solve your daily or specialized needs by communicating
                    directly with the best and closest service providers, and
                    you can get all...
                </p>
                <BorderButton style={"md:mt-[2.2rem] mt-[1.5rem]"} />
            </div>

            {/* UnionPattern */}
            <img
                src={features_union}
                alt="union_pattern"
                className="absolute w-[100vw] h-[60%] left-0 pointer-events-none z-[-1]"
            />
        </section>
    );
};

export default About;
