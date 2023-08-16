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
        <div className="App h-full flex flex-col justify-between md:justify-center">
            <AppProvider>
                <Router>
                    <main>
                        <div className="mx-auto md:max-w-[56.75rem] md:shadow-lg bg-white rounded-md md:p-4 relative flex justify-center md:h-[35.55rem]">
                            <StepsNumbers />
                            <Routes>
                                <Route path="/" element={<FirstStep />} />
                                <Route path="/second" element={<SecondStep />} />
                                <Route path="/third" element={<ThirdStep />} />
                                <Route path="/fourth" element={<FourthStep />} />
                                <Route path="/fifth" element={<Fifth />} />
                            </Routes>
                        </div>
                    </main>
                </Router>
            </AppProvider>
        </div>
    );
}

export default App;