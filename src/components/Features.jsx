//Import Stuff
import { features2, features_union } from "../assets";
import { featuresList } from "../constants";

//Single Feature
const Feature = ({ icon, title, text }) => (
    <div className="flex flex-col gap-3 w-[256px]">
        <div className="w-[70px] h-[70px] rounded-[16px] bg-[#F3F7FA] flex items-center justify-center">
            <img src={icon} alt={title} className="object-contain" />
        </div>
        <h5 className="font-inter font-semibold text-[#101130] text-[20px] md:leading-[24px] leading-[16px]">
            {title}
        </h5>
        <p className="font-poppins font-normal md:leading-[30px] leading-[24px] text-[18px] text-[#606176]">
            {text}
        </p>
    </div>
);

const Features = () => (
    <section
        id="about"
        className="flex md:flex-row flex-col items-center md:py-[5rem] py-[2rem]">
        {/* Image */}
        <div className="flex-1">
            <img src={features2} alt="features" className="object-contain" />
        </div>

        {/* FeaturesInfo */}
        <div className="flex flex-col flex-1">
            {/* Title */}
            <h2 className="text-[#101130] font-manrope font-semibold md:text-[40px]  text-[32px] md:leading-[45px] leading-[23px]">
                Features of Me
            </h2>
            {/* Features */}
            <div className="flex flex-wrap gap-10 md:mt-[5rem] mt-[3rem]">
                {featuresList.map((feature) => (
                    <Feature key={feature.id} {...feature} />
                ))}
            </div>
        </div>

        {/* UnionPattern */}
        <img
            src={features_union}
            alt="union_pattern"
            className="absolute w-[100vw] h-[90%] left-0 z-[-1] pointer-events-none"
        />
    </section>
);

export default Features;
