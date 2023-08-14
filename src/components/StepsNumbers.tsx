import { FORM_STEPS } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppState } from "../state";

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

    const reversedStepsMap: StepsMap = Object.fromEntries(
        Object.entries(stepsMap).map(([key, value]) => [value, key])
    );

    const location = useLocation();
    const navigate = useNavigate();

    const [state] = useAppState();

    // current step may be undefined
    const currentStep: string | undefined = stepsMap[location.pathname];

    const handleChangeStep = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const step = e.currentTarget.id;
        const path = reversedStepsMap[step];

        const { name, email, phone } = state;

        const isAllPersonalInfoFilled = name && email && phone;

        // Prevent user from navigate from first step to any steps without introducing personal info

        if (currentStep === "1" && !isAllPersonalInfoFilled) {
            alert("Please fill in all personal info");
            return;
        }

        navigate(path);
    };

    return (
        <div className="flex gap-5 max-w-[12rem] mx-auto my-8">
            {FORM_STEPS.map((stepNumber) => (
                <button
                    onClick={handleChangeStep}
                    className={`${
                        currentStep == stepNumber.label
                            ? "bg-magnolia opacity-90 text-black"
                            : "bg-transparent text-slate-50"
                    } flex-1 font-semibold w-8 h-8  border border-white rounded-full flex justify-center items-center`}
                    key={stepNumber.label}
                    id={`${stepNumber.label}`}
                >
                    <div>{stepNumber.label}</div>
                </button>
            ))}
        </div>
    );
};

export default StepsNumbers;
