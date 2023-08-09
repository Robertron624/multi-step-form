import { FORM_STEPS } from "./constants";


interface StepsNumbersProps {
    currentStep: number;
    setCurrentStep: (step: number) => void;
}

const StepsNumbers = ({ currentStep, setCurrentStep }: StepsNumbersProps) => {
    const handleStepChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const step = parseInt(e.currentTarget.id);
        setCurrentStep(step);
    };

    return (
        <div className="flex gap-5">
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
        </div>
    );
};

export default StepsNumbers;
