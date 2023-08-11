import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {

    const location = useLocation();
    const navigate = useNavigate();

    type BackMap = {
        [key: string]: string;
    }
    type StepsMap = {
        [key: string]: string;
    }

    const backMap: BackMap = {
        "/second": "/",
        "/third": "/second",
        "/fourth": "/third",
    }

    const stepsMap: StepsMap = {
        "/": "1",
        "/second": "2",
        "/third": "3",
        "/fourth": "4",
    }

    const currentStep: string | undefined = stepsMap[location.pathname];

    const prevStep: string | undefined = backMap[location.pathname];

    const handleBackRedirect = () => {
        navigate(prevStep);
    }
        

    return (
        <div className="bg-white w-full py-3">
            <div
                className={`${
                    currentStep == "/" ? "justify-end" : "justify-between"
                } flex w-[90%] mx-auto`}
            >
                {currentStep != "/" && (
                    <button onClick={handleBackRedirect} className="bg-transparent text-cool-gray text-sm font-bold py-2 px-4 rounded-md">
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
