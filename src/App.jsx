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
} from "./components";
import Became from "./components/Became";

const App = () => (
    <>
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

export default App;
