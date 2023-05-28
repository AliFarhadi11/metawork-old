import { useEffect } from "react";
import {
    Navbar,
    Hero,
    Stores,
    About,
    ServiceCategories,
    Features,
    Services,
    VideoAbout,
    Companies,
    Footer,
    Became,
} from "./components";

// import SrConfings from "./components/SrConfings";

const App = () => {
    return (
        <>
            {/* ScrollReveal */}
            {/* <SrConfings /> */}
            {/* Header */}
            <header className="py-4">
                {/* BoxWidth */}
                <div className="xl:max-w-[1300px] sm:px-16 px-6 mx-auto box-width">
                    <Navbar />
                </div>
            </header>

            {/* MainContent */}
            <main>
                {/* BoxWidth */}
                <div className="xl:max-w-[1300px] sm:px-16 px-6 mx-auto box-width">
                    <Hero />
                    <Stores />
                    <About />
                    <ServiceCategories />
                    <Features />
                    <Services />
                    <Became />
                    <VideoAbout />
                    <Companies />
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#161B1F] pt-10">
                {/* BoxWidth */}
                <div className="xl:max-w-[1300px] sm:px-16 px-6 mx-auto box-width">
                    <Footer />
                </div>
            </footer>
        </>
    );
};

export default App;
