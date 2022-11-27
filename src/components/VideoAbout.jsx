// Importing Stuff
import { thumbnail, play } from "../assets";

const VideoAbout = () => (
    <section
        id="about"
        className="flex md:flex-row flex-col items-center md:py-[5rem] py-[2rem] gap-10">
        {/* AboutInfo */}
        <div className="flex flex-col items-start flex-1">
            <h4 className="text-primary uppercase font-manrope font-extrabold text-[18px]">
                Our features
            </h4>
            <h2 className="text-dark font-manrope text-[40px] font-semibold md:my-[1.5rem]">
                How meta work is work?
            </h2>
            <p className="text-light font-poppins font-normal sm:leading-[26px] leading-[20px]text-[18px] max-w-[594px]">
                Metawork allows natural or legal persons as service providers to
                provide you with a personal panel where you can register your
                business profile, which includes: Metawork allows natural or
                legal persons as service providers to provide you with a
                personal panel where you can register your business profile,
                which includes:
            </p>
        </div>
        {/* Iframe */}
        <div className="relative">
            {/* Thumbnail */}
            <img
                src={thumbnail}
                alt="thumbnail"
                className="absolute object-cover w-full"
            />
            {/* PlayButton */}
            <button
                type="button"
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={play} alt="" />
            </button>
            <iframe
                src=""
                frameBorder={0}
                className={`md:w-[585px] w-[100%] md:h-[390px] rounded-[20px]`}></iframe>
        </div>
    </section>
);

export default VideoAbout;
