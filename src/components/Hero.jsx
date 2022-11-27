import Button from "./Button";
import hero_union1 from "../assets/hero_union1.png";
import hero_union2 from "../assets/hero_union2.png";

const Hero = () => (
    <section
        id="home"
        className="md:h-[75vh] flex md:flex-row flex-col items-center justify-center md:py-[5rem] py-[2rem]">
        {/* HeroInfo */}
        <div className="flex flex-1 flex-col">
            <h1 className="font-inter font-bold text-hero sm:text-[55px] text-[32px] md:mb-[5rem] mb-[2rem]">
                The first super <br className="md:block hidden" /> application
                is <br className="md:block hidden" /> integrated{" "}
                <br className="md:block hidden" />
                informatinon
            </h1>
            <Button
                style={"h-[64px] w-[233px] light-shadow"}
                text={"Get Started"}
            />
        </div>
        {/* HeroImage */}
        <div className="flex-1"></div>

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

export default Hero;
