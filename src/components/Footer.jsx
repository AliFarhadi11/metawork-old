import { phone } from "../assets";
import { usefulLinks } from "../constants";
import { storesList } from "../constants";

const Footer = () => (
    <div className="flex flex-col items-center">
        {/* FooterRow */}
        <div className="flex md:flex-row flex-col items-start justify-between w-full">
            {/* Col - LeftCol */}
            <div className="colmd:mb-0 mb-6">
                <h3 className="font-poppins font-bold text-[25px] text-white mb-8">
                    Contact
                </h3>
                <ul className="flex-col gap-8">
                    <li className="mb-10">
                        <a href="#" className="flex items-center">
                            <img
                                src={phone}
                                alt="phone"
                                className="object-contain "
                            />
                            <span className="font-poppins font-medium text-[16px] text-white ml-5">
                                Contact Us
                            </span>
                        </a>
                    </li>
                    <li className="mb-10">
                        <a href="#" className="flex items-center">
                            <img
                                src={phone}
                                alt="phone"
                                className="object-contain "
                            />
                            <span className="font-poppins font-medium text-[16px] text-white ml-5">
                                Info@Email.com
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* Col - CenterCol */}
            <div className="colmd:mb-0 mb-6">
                <h3 className="font-poppins font-bold text-[25px] text-white mb-5">
                    Links
                </h3>
                <ul className="flex flex-col gap-2">
                    {usefulLinks.map((link) => (
                        <li
                            key={link.id}
                            className="font-poppins font-normal text-[#999] text-[18px] leading-[27px]">
                            <a href={link.link}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Col - RightCol */}
            <div className="col md:mb-0 mb-6">
                <h3 className="font-poppins font-bold text-[25px] text-white mb-8">
                    Investment Disclosure
                </h3>
                <p className="font-poppins font-normal text-[#999] text-[18px] leading-[27px] max-w-[554px]">
                    When you invest with Atlas, you are more than a number; you
                    are a partner. As a partner with us, you can access
                    opportunities usually reserved only for the largest
                    institutional investors.
                </p>
            </div>
        </div>
        {/* FooterRow */}
        <div className="flex md:flex-row flex-col md:items-center items-start mt-[3rem] py-8 px-8 w-[85%] border-t-[1px] border-t-[#FFFFFF]">
            <p className="font-manrope text-[18px] text-white font-medium md:mb-0 mb-5 flex-1">
                Download metawork from stores :
            </p>
            <div className="flex items-center flex-wrap gap-[1rem]">
                {storesList.map((store) => (
                    <a href={store.link} key={store.id}>
                        <img
                            src={store.img}
                            alt="store"
                            className="object-contain w-[135px] h-[40px]"
                        />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default Footer;
