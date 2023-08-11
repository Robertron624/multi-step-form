import Footer from "../components/Footer";
import { useAppState } from "../state";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PLANS } from "../constants";
import { useState } from "react";

const SecondStep = () => {
    const [state, setState] = useAppState();

    const [selectedPlan, setSelectedPlan] = useState<string>("arcade");

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
        setSelectedPlan(planId);
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit(saveData)} action="" method="POST">
                <fieldset className="flex flex-col justify-between h-[84vh]">
                    <div className="w-[90%] shadow-lg mx-auto bg-white rounded-md px-4 py-7 text-left">
                        <legend className="font-bold text-xl mb-2">
                            Select your plan
                        </legend>
                        <p className="text-cool-gray text-base mb-6">
                            You have the option of monthly or yearly billing.
                        </p>
                        <div className="flex flex-col gap-4">
                            {PLANS.map((plan) => {
                                const { id, name, price, iconUrl } = plan;

                                return (
                                    <div
                                        onClick={handleSelectPlan}
                                        key={id}
                                        id={id}
                                        className={`flex px-4 py-2 gap-3 border ${
                                            id === selectedPlan
                                                ? "border-purplish-blue "
                                                : "border-light-gray"
                                        } rounded-md`}
                                    >
                                        <img src={iconUrl} alt={`${id} icon`} />
                                        <div>
                                            <p className="flex flex-col">
                                                <label className="font-bold">
                                                    {name}
                                                </label>{" "}
                                                <span className="text-cool-gray">
                                                    ${price.monthly}/mo
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Footer />
                </fieldset>
            </form>
        </div>
    );
};

export default SecondStep;
