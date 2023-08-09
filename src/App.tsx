import { useState } from "react";
import "./App.css";
import StepsNumbers from "./StepsNumbers";

// Steps components
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import FourthStep from "./steps/FourthStep";

function pickStepComponent(step: number) {
    switch (step) {
        case 1:
            return <FirstStep />;
        case 2:
            return <SecondStep />;
        case 3:
            return <ThirdStep />;
        case 4:
            return <FourthStep />;
        default:
            return <></>;
    }
}

function App() {
    const [currentStep, setCurrentStep] = useState<number>(1);

    return (
        <div className="flex flex-col justify-between h-full">
            <main className="flex flex-col gap-8 items-center justify-center mt-6">
                <StepsNumbers
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />

                <section className="forms-container">
                    {pickStepComponent(currentStep)}
                </section>
            </main>
            <footer className="bg-white w-full py-3">
              <div className={`${currentStep == 1 ? 'justify-end': 'justify-between'} flex w-[90%] mx-auto`}>

                {currentStep != 1 && (
                  <button className="bg-transparent text-cool-gray text-sm font-bold py-2 px-4 rounded-md">
                    Go Back
                  </button>
                )}

                <button className="bg-marine-blue text-light-gray font-bold py-2 px-4 rounded-md">
                    Next Step
                </button>
              </div>
            </footer>
        </div>
    );
}

export default App;
