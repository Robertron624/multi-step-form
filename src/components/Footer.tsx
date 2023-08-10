import { useLocation } from "react-router-dom";

const Footer = () => {

    const location = useLocation();

    const currentStep = Number(location.pathname.split("/")[1]) + 1;

    return (
        <div className="bg-white w-full py-3">
            <div
                className={`${
                    currentStep == 1 ? "justify-end" : "justify-between"
                } flex w-[90%] mx-auto`}
            >
                {currentStep != 1 && (
                    <button className="bg-transparent text-cool-gray text-sm font-bold py-2 px-4 rounded-md">
                        Go Back
                    </button>
                )}

                <button type="submit" className="bg-marine-blue text-light-gray font-bold py-2 px-4 rounded-md">
                    Next Step
                </button>
            </div>
        </div>
    );
};

export default Footer;
