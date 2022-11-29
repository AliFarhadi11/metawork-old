import sr from "./ScrollReveal";

const SrConfigs = () => {
    //RevealFromLeft
    sr.reveal(".left-r", {
        duration: 1500,
        distance: "60px",
        origin: "left",
    });

    //RevealFromRight
    sr.reveal(".right-r", {
        duration: 1500,
        distance: "60px",
        origin: "right",
    });

    //RevealFromTop
    sr.reveal(".top-r", {
        duration: 1500,
        distance: "60px",
        origin: "top",
    });
    
    //RevealFromBottom
    sr.reveal(".bottom-r", {
        duration: 1500,
        distance: "60px",
        origin: "bottom",
    });
};

export default SrConfigs();
