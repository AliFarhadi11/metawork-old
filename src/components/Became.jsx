import { hand_shake, dot_box } from "../assets";

const Became = () => (
    <section className="left-r bg-[#F3F7FA] flex items-center md:flex-row flex-col-reverse md:h-[400px] h-atuo rounded-[30px] relative md:my-[5rem] my-[2rem] md:pt-0 pt-[2rem] z-10 md:overflow-visible overflow-hidden gap-7">
        {/* HandShakeManImg */}
        <div className="flex-1">
            <img
                src={hand_shake}
                alt="hand shake"
                className="object-contain md:absolute bottom-0 left-[15%] z-10 md:h-[476px] h-[300px]"
            />
            {/* DotPatternImg */}
            <img
                src={dot_box}
                alt="dot_pattern"
                className="absolute w-[167px] md:left-[28%] md:top-[18%] left-[50%] top-[60%] -z-10"
            />
            {/* DotPatternImg */}
            <img
                src={dot_box}
                alt="dot_pattern"
                className="absolute w-[167px] md:left-[11%] md:bottom-[5%] left-[20%] bottom-[-20%] -z-10"
            />
        </div>
        <div className="flex-1">
            <p className="font-manrope font-semibold md:text-[64px] text-[52px] text-dark md:text-left text-center">
                Became a <br /> service provider
            </p>
        </div>
        {/* Circles */}
        <div className="h-[34px] w-[34px] rounded-full absolute md:left-[5%] md:top-[25%] left-[0%] top-[5px] bg-[#F6A081] -z-10"></div>

        <div className="h-[39px] w-[39px] rounded-full absolute md:left-[60%] md:top-[15%] left-[80%] bg-[#D38CE7] -z-10"></div>

        <div className="h-[20px] w-[20px] rounded-full absolute md:left-[47%] md:bottom-[30%] left-[15%] top-[50%] bg-primary -z-10"></div>
    </section>
);

export default Became;
