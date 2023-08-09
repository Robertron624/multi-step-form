const stepNumbersArray = [1, 2, 3, 4];

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
            {stepNumbersArray.map((stepNumber) => (
                <button
                    onClick={handleStepChange}
                    className={`${
                        currentStep == stepNumber
                            ? "bg-magnolia"
                            : "bg-transparent"
                    } flex-1 w-8 h-8 ${
                        currentStep == stepNumber
                            ? "text-black"
                            : "text-slate-50"
                    } text-slate-50 border border-white rounded-full flex justify-center items-center`}
                    key={stepNumber}
                    id={`${stepNumber}`}
                >
                    <div>{stepNumber}</div>
                </button>
            ))}
        </div>
    );
};

export default StepsNumbers;
