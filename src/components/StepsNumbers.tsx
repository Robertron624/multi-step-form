import { FORM_STEPS } from "../constants";
import { useLocation } from "react-router-dom";

const StepsNumbers = () => {
    const location = useLocation();

    const currentStep = Number(location.pathname.split("/")[1]) + 1;

    return (
        <div className="flex gap-5 max-w-[12rem] mx-auto my-8">
            {FORM_STEPS.map((stepNumber) => (
                <button
                    className={`${
                        currentStep == Number(stepNumber.label)
                            ? "bg-magnolia text-black"
                            : "bg-transparent text-slate-50"
                    } flex-1 font-semibold w-8 h-8  border border-white rounded-full flex justify-center items-center`}
                    key={stepNumber.label}
                    id={`${stepNumber}`}
                >
                    <div>{stepNumber.label}</div>
                </button>
            ))}
        </div>
    );
};

export default StepsNumbers;

{
    /* <div className="flex gap-5">
{FORM_STEPS.map((stepNumber) => (
    <button
        onClick={handleStepChange}
        className={`${
            currentStep == Number(stepNumber.label)
                ? "bg-magnolia"
                : "bg-transparent"
        } flex-1 w-8 h-8 ${
            currentStep == Number(stepNumber.label)
                ? "text-black"
                : "text-slate-50"
        } text-slate-50 border border-white rounded-full flex justify-center items-center`}
        key={stepNumber.label}
        id={`${stepNumber}`}
    >
        <div>{stepNumber.label}</div>
    </button>
))}
</div> */
}
