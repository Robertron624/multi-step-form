import Footer from "../components/Footer";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { ADDONS, Addon } from "../constants";
import { useState } from "react";

const ThirdStep = () => {
    const [state, setState] = useAppState();

    const { period } = state;

    const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);

    const navigate = useNavigate();

    const handleSelectAddon = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const addonId = e.target.id;

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

    const handleSubmit = () => {};

    return (
        <div className="">
            <form onSubmit={handleSubmit} action="" method="POST">
                <fieldset className="flex flex-col justify-between h-[84vh]">
                    <div className="w-[90%] mb-6 shadow-lg mx-auto bg-white rounded-md px-4 py-7 text-left">
                        <legend className="font-bold text-xl mb-2">
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
                                        className={`flex px-4 py-2 gap-3 border ${
                                            isAddonOnList
                                                ? "border-purplish-blue "
                                                : "border-light-gray"
                                        } rounded-md items-center`}
                                    >
                                        <input
                                            type="checkbox"
                                            id={id}
                                            name={id}
                                            checked={isAddonOnList}
                                            onChange={handleSelectAddon}
                                        />
                                        <div className="flex justify-between w-11/12 items-center ">
                                            <div className="flex flex-col">
                                                <label className="font-bold">
                                                    {name}
                                                </label>{" "}
                                                <span className="text-cool-gray text-xs">
                                                    {`$${feature}`}
                                                </span>
                                            </div>
                                            <div className="text-purplish-blue  text-xs">
                                                {`$${
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
