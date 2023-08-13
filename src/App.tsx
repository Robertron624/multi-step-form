import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StepsNumbers from "./components/StepsNumbers";

// Steps components
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import FourthStep from "./steps/FourthStep";

import { AppProvider } from "./state";
import Fifth from "./steps/Fifth";

function App() {

    return (
        <div className="App h-full flex flex-col justify-between">
            <AppProvider>
                <Router>
                    <main>
                        <StepsNumbers />
                        <Routes>
                            <Route path="/" element={<FirstStep />} />
                            <Route path="/second" element={<SecondStep />} />
                            <Route path="/third" element={<ThirdStep />} />
                            <Route path="/fourth" element={<FourthStep />} />
                            <Route path="/fifth" element={<Fifth />} />
                        </Routes>
                    </main>
                </Router>
            </AppProvider>
        </div>
    );
}

export default App;

{
    /* <div className="flex flex-col justify-between h-full">
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
    <div
        className={`${
            currentStep == 1
                ? "justify-end"
                : "justify-between"
        } flex w-[90%] mx-auto`}
    >
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
</div> */
}

// function pickStepComponent(step: number) {
//     switch (step) {
//         case 1:
//             return <FirstStep />;
//         case 2:
//             return <SecondStep />;
//         case 3:
//             return <ThirdStep />;
//         case 4:
//             return <FourthStep />;
//         default:
//             return <></>;
//     }
// }
