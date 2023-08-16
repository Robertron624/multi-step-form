import Footer from "../components/Footer";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { PLANS, Plan as PlanType } from "../constants";
import { useState } from "react";

import "./SecondStep.css";

const SecondStep = () => {
    const [state, setState] = useAppState();

    const [selectedPlan, setSelectedPlan] = useState<
        "arcade" | "advanced" | "pro"
    >("arcade");

    const [selectedPeriod, setSelectedPeriod] = useState<"yearly" | "monthly">(
        "monthly"
    );

    const navigate = useNavigate();

    interface FormData {
        plan: PlanType;
        period: "yearly" | "monthly";
    }

    const handleSubmit = () => {
        const data: FormData = {
            plan: PLANS.find((plan) => plan.id === selectedPlan)!,
            period: selectedPeriod,
        };

        setState({
            ...state,
            ...data,
        });
        navigate("/third");
    };

    const handleSelectPlan = (
        e:  React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const planId = e.currentTarget.id;
        setSelectedPlan(planId as "arcade" | "advanced" | "pro");
    };

    const handlePeriodChange = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const period = e.currentTarget.id;
        setSelectedPeriod(period as "yearly" | "monthly");
    };

    const handlePeriodChangeCheckbox = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.checked) {
            setSelectedPeriod("yearly");
        } else {
            setSelectedPeriod("monthly");
        }
    };

    return (
        <div className="absolute md:py-4 md:px-20 md:relative top-24 md:top-0">
            <form onSubmit={handleSubmit} action="" method="POST">
                <fieldset className="flex flex-col justify-between h-[84vh] md:h-[75vh]">
                    <div className="w-[90%] mb-8 md:mb-0 md:w-auto shadow-lg md:shadow-none mx-auto bg-white rounded-md px-4 py-7 text-left">
                        <legend className="font-bold text-xl md:text-4xl mb-2">
                            Select your plan
                        </legend>
                        <p className="text-cool-gray text-base mb-6">
                            You have the option of monthly or yearly billing.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4">
                            {PLANS.map((plan) => {
                                const {
                                    id,
                                    name,
                                    price,
                                    iconUrl,
                                    yearlyDiscount,
                                } = plan;

                                return (
                                    <button
                                    type="button"
                                        onClick={handleSelectPlan}
                                        key={id}
                                        id={id}
                                        className={`text-left flex px-4 py-2 gap-3 md:flex-col md:justify-between md:items-start border ${
                                            id === selectedPlan
                                                ? "border-purplish-blue bg-magnolia"
                                                : "border-light-gray"
                                        } rounded-md items-center md:w-32 md:h-36 hover:border-purplish-blue transition-all duration-200`}
                                    >
                                        <img src={iconUrl} alt={`${id} icon`} />
                                        <div>
                                            <p className="flex flex-col">
                                                <label className="font-bold">
                                                    {name}
                                                </label>{" "}
                                                <span className="text-cool-gray text-xs">
                                                    {`${
                                                        selectedPeriod ===
                                                        "monthly"
                                                            ? `$${price.monthly}/mo`
                                                            : `$${price.yearly}/yr`
                                                    }`}
                                                </span>
                                                {selectedPeriod == "yearly" ? (
                                                    <span className="text-marine-blue font-semibold text-xs">
                                                        {yearlyDiscount}
                                                    </span>
                                                ) : null}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="period-switcher bg-magnolia rounded-md mt-4 md:mt-8 py-2 px-4 flex justify-center gap-3 md:gap-6 items-center">
                            <div
                                id="monthly"
                                onClick={handlePeriodChange}
                                className={` font-bold text-sm text-marine-blue"`}
                            >
                                Monthly
                            </div>

                            <div className="cl-toggle-switch flex">
                                <label className="cl-switch">
                                    <input
                                        onChange={handlePeriodChangeCheckbox}
                                        id="switcher"
                                        type="checkbox"
                                        checked={selectedPeriod === "yearly"}
                                    />
                                    <span></span>
                                </label>
                            </div>

                            <div
                                id="yearly"
                                onClick={handlePeriodChange}
                                className={` font-bold text-sm text-cool-gray`}
                            >
                                Yearly
                            </div>
                        </div>
                    </div>
                    <Footer />
                </fieldset>
            </form>
        </div>
    );
};

export default SecondStep;
