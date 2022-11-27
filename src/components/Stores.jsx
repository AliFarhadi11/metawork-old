import { storesList } from "../constants";

const Stores = () => (
    <section
        id="stores"
        className="flex md:flex-row flex-col md:items-center items-start md:my-[5rem] my-4">
        <h2 className="font-manrope text-[40px] text-dark font-[600] md:mb-0 mb-5 flex-1">
            Download Metawork <br className="sm:block hidden" /> From Stores
        </h2>
        <div className="flex items-center flex-wrap gap-[1rem]">
            {storesList.map((store) => (
                <a href={store.link} key={store.id}>
                    <img
                        src={store.img}
                        alt="store"
                        className="object-contain w-[215px] h-[64px]"
                    />
                </a>
            ))}
        </div>
    </section>
);

export default Stores;
