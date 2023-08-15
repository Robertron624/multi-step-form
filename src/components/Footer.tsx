import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    type StepsMap = {
        [key: string]: string;
    };

    const backMap: StepsMap = {
        "/second": "/",
        "/third": "/second",
        "/fourth": "/third",
    };

    const stepsMap: StepsMap = {
        "/": "1",
        "/second": "2",
        "/third": "3",
        "/fourth": "4",
    };

    const currentStep: string | undefined = stepsMap[location.pathname];

    const prevStep: string | undefined = backMap[location.pathname];

    const handleBackRedirect = () => {
        navigate(prevStep);
    };

    const istFirstStep = currentStep == "1";
    const isLastStep = currentStep == "4";

    return (
        <div className="bg-white w-full py-3 md:mt-16">
            <div
                className={`${
                    istFirstStep ? "justify-end" : "justify-between"
                } flex w-[90%] mx-auto`}
            >
                {!istFirstStep && (
                    <button
                        onClick={handleBackRedirect}
                        className="bg-transparent text-cool-gray text-sm font-bold py-2 px-4 rounded-md"
                    >
                        Go Back
                    </button>
                )}

                {isLastStep ? (
                    <a href="/fifth" className="bg-purplish-blue text-alabaster font-bold py-2 px-4 rounded-md">
                        Confirm
                    </a>
                ) : (
                    <button
                        type="submit"
                        className={`text-alabaster bg-marine-blue font-bold py-2 px-4 rounded-md`}
                    >
                        Next Step
                    </button>
                )}
            </div>
        </div>
    );
};

export default Footer;
