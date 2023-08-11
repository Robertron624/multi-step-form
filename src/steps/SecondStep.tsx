import Footer from "../components/Footer";
import { useAppState } from "../state";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PLANS } from "../constants";
import { useState } from "react";

const SecondStep = () => {
    const [state, setState] = useAppState();

    const [selectedPlan, setSelectedPlan] = useState<
        "arcade" | "advanced" | "pro"
    >("arcade");

    const [selectedPeriod, setSelectedPeriod] = useState<"yearly" | "monthly">(
        "monthly"
    );

    const { handleSubmit, register } = useForm({
        defaultValues: state,
        mode: "onSubmit",
    });

    const navigate = useNavigate();

    interface FormData {
        plan: "arcade" | "advanced" | "pro";
        period: "yearly" | "monthly";
    }

    const saveData = (data: Partial<FormData>) => {
        setState({
            ...state,
            ...data,
        });
        navigate("/third");
    };

    const handleSelectPlan = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const planId = e.currentTarget.id;
        setSelectedPlan(planId as "arcade" | "advanced" | "pro");
    };

    const handlePeriodChange = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const period = e.currentTarget.id;

        // Check if function is called from the switcher
        if (period === "switcher") {
            if (selectedPeriod === "monthly") {
                setSelectedPeriod("yearly");
            } else {
                setSelectedPeriod("monthly");
            }
            return;
        }

        setSelectedPeriod(period as "yearly" | "monthly");
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit(saveData)} action="" method="POST">
                <fieldset className="flex flex-col justify-between h-[84vh]">
                    <div className="w-[90%] mb-6 shadow-lg mx-auto bg-white rounded-md px-4 py-7 text-left">
                        <legend className="font-bold text-xl mb-2">
                            Select your plan
                        </legend>
                        <p className="text-cool-gray text-base mb-6">
                            You have the option of monthly or yearly billing.
                        </p>
                        <div className="flex flex-col gap-4">
                            {PLANS.map((plan) => {
                                const {
                                    id,
                                    name,
                                    price,
                                    iconUrl,
                                    yearlyDiscount,
                                } = plan;

                                return (
                                    <div
                                        onClick={handleSelectPlan}
                                        key={id}
                                        id={id}
                                        className={`flex px-4 py-2 gap-3 border ${
                                            id === selectedPlan
                                                ? "border-purplish-blue "
                                                : "border-light-gray"
                                        } rounded-md items-center`}
                                    >
                                        <img src={iconUrl} alt={`${id} icon`} />
                                        <div>
                                            <p className="flex flex-col">
                                                <label className="font-bold">
                                                    {name}
                                                </label>{" "}
                                                <span className="text-cool-gray">
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
                                    </div>
                                );
                            })}
                        </div>
                        <div className="period-switcher bg-magnolia rounded-md mt-4 py-2 px-4 flex justify-center gap-3 items-center">
                            <div
                                id="monthly"
                                onClick={handlePeriodChange}
                                className={` font-bold text-sm text-marine-blue"`}
                            >
                                Monthly
                            </div>
                            <div
                                className={`bg-marine-blue w-9 h-4 px-1 rounded-lg relative flex items-center ${selectedPeriod == "yearly" ? "justify-end" : "" }`}
                            >
                                <span onClick={handlePeriodChange} id="switcher" className={`w-[.65rem] h-[.65rem] inline bg-magnolia rounded-full transition-all duration-200 `}></span>
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
