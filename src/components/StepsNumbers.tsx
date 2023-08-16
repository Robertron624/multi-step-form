import { FORM_STEPS } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppState } from "../state";

function submitFirstForm() {
    const currentSubmitButton = document.querySelector(
        "button[type=submit]"
    ) as HTMLButtonElement;

    currentSubmitButton.click();
}

const StepsNumbers = () => {
    type StepsMap = {
        [key: string]: string;
    };

    const stepsMap: StepsMap = {
        "/": "1",
        "/second": "2",
        "/third": "3",
        "/fourth": "4",
        "/fifth": "4",
    };

    // Map to navigate to the correct step, user cannot manually go to thank you page
    const navigateMap: StepsMap = {
        "1": "/",
        "2": "/second",
        "3": "/third",
        "4": "/fourth",
    };

    const location = useLocation();
    const navigate = useNavigate();

    const [state] = useAppState();

    // current step may be undefined
    const currentStep: string | undefined = stepsMap[location.pathname];

    const handleChangeStep = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const step = e.currentTarget.id;

        const path = navigateMap[step];

        const { name, email, phone } = state;

        const isAllPersonalInfoFilled = name && email && phone;

        // Prevent user from navigate from first step to any steps without introducing personal info

        if (currentStep === "1" && !isAllPersonalInfoFilled) {
            submitFirstForm();
            return;
        }

        navigate(path);
    };

    return (
        <div className="w-full md:max-w-[17rem] h-40 md:h-full bg-no-repeat bg-steps-pattern-mobile md:bg-steps-pattern-desktop bg-cover md:rounded-md">
            <div className="flex md:flex-col gap-5 md:gap-8 max-w-[12rem] md:max-w-none items-center mx-auto py-8 ">
                {FORM_STEPS.map((stepNumber) => (
                    <div className="md:flex items-center md:w-40 gap-3" key={stepNumber.label}>
                        <button
                            onClick={handleChangeStep}
                            className={`${
                                currentStep == stepNumber.label
                                    ? "bg-magnolia opacity-90 text-black"
                                    : "bg-transparent text-slate-50"
                            } font-semibold w-8 h-8  border border-white rounded-full flex justify-center items-center`}
                            id={`${stepNumber.label}`}
                        >
                            <div>{stepNumber.label}</div>
                        </button>
                        <div className="hidden md:inline-block text-left">
                            <p className="text-cool-gray text-xs">
                                STEP {stepNumber.label}
                            </p>
                            <p className="font-bold text-base text-alabaster uppercase">
                                {stepNumber.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepsNumbers;
