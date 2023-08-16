import { useState } from "react";
import Footer from "../components/Footer";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { ADDONS, Addon } from "../constants";

import "./ThirdStep.css";

const ThirdStep = () => {
    const [state, setState] = useAppState();

    const { period } = state;

    const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);

    const navigate = useNavigate();

    const handleSelectAddon = (e: 
        React.MouseEvent<HTMLDivElement, MouseEvent>
        ) => {
        const addonId = e.currentTarget.id;

        // Check if the addon is already checked
        const isAddonOnList = selectedAddons.find(
            (addon) => addon.id === addonId
        );

        if (isAddonOnList) {
            setSelectedAddons(
                selectedAddons.filter((addon) => addon.id !== addonId)
            );
            return;
        }

        const addon = ADDONS.find((addon) => addon.id === addonId);
        if (addon) {
            setSelectedAddons([...selectedAddons, addon]);
        }
    };

    const handleSubmit = () => {
        const data = {
            addons: selectedAddons,
        };

        setState({
            ...state,
            ...data,
        });
        navigate("/fourth");
    };

    return (
        <div className="absolute md:py-4 md:px-28 md:relative top-24 md:top-0">
            <form onSubmit={handleSubmit} action="" method="POST">
                <fieldset className="flex flex-col justify-between h-[84vh] md:h-[75vh]">
                    <div className="w-[90%] md:w-auto shadow-lg md:shadow-none mx-auto bg-white rounded-md md:px-0 px-4 py-7 text-left">
                        <legend className="font-bold text-xl md:text-4xl mb-2">
                            Pick add-ons
                        </legend>
                        <p className="text-cool-gray text-base mb-6">
                            Add-ons help enhance your gaming experience.
                        </p>
                        <div className="flex flex-col gap-4">
                            {ADDONS.map((addon) => {
                                const { id, name, price, feature } = addon;

                                const isAddonOnList =
                                    selectedAddons.includes(addon);

                                return (
                                    <div
                                        key={id}
                                        className={`flex px-4 md:w-[25rem] py-2 md:py-4 cursor-pointer hover:border-purplish-blue transition-all duration-200 gap-3 border ${
                                            isAddonOnList
                                                ? "border-purplish-blue bg-magnolia"
                                                : "border-light-gray"
                                        } rounded-md items-center`}
                                    >
                                        <div
                                            id={id}
                                            className="checkbox-container"
                                            onClick={handleSelectAddon}
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4"
                                                name={id}
                                                checked={isAddonOnList}
                                            />
                                            <div className="checkmark"></div>
                                        </div>
                                        <div className="flex justify-between w-11/12 items-center ">
                                            <div className="flex flex-col">
                                                <label className="font-bold">
                                                    {name}
                                                </label>{" "}
                                                <span className="text-cool-gray text-xs">
                                                    {`${feature}`}
                                                </span>
                                            </div>
                                            <div className="text-purplish-blue  text-xs">
                                                {`+$${
                                                    period === "monthly"
                                                        ? price.monthly
                                                        : price.yearly
                                                } / ${
                                                    period === "monthly"
                                                        ? "mo"
                                                        : "yr"
                                                }`}
                                            </div>
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

export default ThirdStep;
