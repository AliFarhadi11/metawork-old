import { serviceProvidersList } from "../constants";

//Signle Category
const Category = ({ title, icon }) => (
    <div className="category top-r p-4 pr-10 bg-white flex items-center gap-4 rounded-[12px]">
        <div className="icon-wrapper rounded-[12px] bg-[#EAEAFF] w-[62px] h-[62px] flex items-center justify-center">
            <img
                src={icon}
                alt={title}
                className="w-[42px] h-[42px] object-contain"
            />
        </div>
        <p className="font-poppins font-medium text-dark text-[18px]">
            {title}
        </p>
    </div>
);

const ServiceCategories = () => (
    <section
        id="serviceProviders"
        className="bg-[#FBFBFB] md:p-[5rem] p-3 rounded-[30px] md:my-[5rem] my-[2rem]">
        {/* Heading - Title */}
        <h2 className="left-r text-dark font-manrope md:text-[40px] text-[32px] font-semibold md:mb-[4rem] mb-5 text-center">
            Our service provider categories
        </h2>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 ">
            {serviceProvidersList.map((service) => (
                <Category
                    key={service.id}
                    title={service.title}
                    icon={service.icon}
                />
            ))}
        </div>
    </section>
);

export default ServiceCategories;
