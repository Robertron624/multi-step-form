import { useState } from 'react'
import './App.css'
import StepsNumbers from './StepsNumbers'

function App() {

  const [currentStep, setCurrentStep] = useState<number>(1)

  return (
    <>
      <div className="flex justify-center mt-6">
          <StepsNumbers currentStep={currentStep} setCurrentStep={setCurrentStep}/>
      </div>
    </>
  )
}

export default App
