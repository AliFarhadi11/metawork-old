import { companiesList } from "../constants";
import BorderButton from "../components/BorderButton";
import metawork_union from "../assets/metawork_union.png";

//Single Company
const Company = ({ img, title, text }) => (
    <div className="right-r bg-[#FBFBFB] rounded-[16px] p-6 service-card h-[365px] flex flex-col justify-start">
        {/* Image */}
        <img src={img} alt={title} className="object w-[164px] h-[102px]" />

        {/* Title */}
        <h5 className="text-hero font-manrope font-bold md:leading-[22px] leading-[16px] text-[18px] my-5">
            {title}
        </h5>

        {/* Text */}
        <p className="text-light text-[14px] leading-[22px]  font-manrope font-normal max-w-[225px]">
            {text}
        </p>
    </div>
);

const Companies = () => (
    <section
        id="services"
        className="md:py-[5rem] py-[2rem] flex flex-col items-center">
        {/* Title */}
        <h2 className="left-r text-dark font-manrope md:text-[40px] text-[32px] font-semibold md:mb-[4rem] mb-5 text-center">
            Metawork for Companies
        </h2>
        {/* CompaniesList */}
        <div className="flex md:flex-nowrap flex-wrap gap-6 items-center justify-center">
            {companiesList.map((company) => (
                <Company key={company.id} {...company} />
            ))}
        </div>

        {/* UnionPattern */}
        <img
            src={metawork_union}
            alt="union_pattern"
            className="absolute w-[100vw] h-[60%] left-0 z-[-1] pointer-events-none"
        />
    </section>
);

export default Companies;
