import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useAppState } from "../state";

const FourthStep = () => {

    const [state] = useAppState();

    const navigate = useNavigate();

    const { period, plan, addons } = state;

    const totalAddonsAmount = addons?.reduce((acc, addon) => {
      return acc + addon.price[period];
    }, 0);

    const total = totalAddonsAmount ? totalAddonsAmount + plan?.price[period] : plan?.price[period];

    const handleChangePlan = () => {
        navigate("/second");
    };

    return (
        <div className="absolute top-24 w-full">
            <div>
                <fieldset className="flex flex-col justify-between h-[84vh]">
                    <div className="w-[90%] mb-6 shadow-lg mx-auto bg-white rounded-md px-4 py-7 text-left">
                        <legend className="font-bold text-xl mb-2">
                            Finishing up
                        </legend>
                        <p className="text-cool-gray text-base mb-6 max-w-[16rem]">
                            Double-check everything looks OK before committing.
                        </p>
                        <div className="bg-magnolia rounded-md px-4 py-5">
                            <div className="flex justify-between border-b-2 border-light-gray pb-3 items-center">
                                <p className="flex flex-col">
                                    <span className="font-bold text-sm text-marine-blue">
                                        {plan?.name}
                                    </span>
                                    <button
                                        onClick={handleChangePlan}
                                        className="text-cool-gray underline text-sm"
                                    >
                                        Change
                                    </button>
                                </p>
                                <p className="font-bold text-marine-blue">
                                    ${plan?.price[period]}
                                    {period === "yearly" ? "/yr" : "/mo"}
                                </p>
                            </div>
                            {addons?.length ? (
                                <div className="pt-3 flex flex-col gap-1">
                                    {addons.map((addon) => {
                                      const { id, name, price } = addon;
                                      return(
                                        <p key={id} className="flex justify-between">
                                          <span className="text-sm text-cool-gray">
                                            {name}
                                          </span>
                                          <span className="text-sm font-semibold text-marine-blue">
                                            +${price[period]}{period === "yearly" ? "/yr" : "/mo"}
                                          </span>
                                        </p>
                                      )
                                    })}

                                </div>
                            ) : null}
                        </div>
                        <p className="flex mt-5 justify-between px-4">
                            <span className="text-sm text-cool-gray">
                              Total ({period === "yearly"
                                    ? "per year"
                                    : "per month"})
                              </span>
                              <span>
                                <span className="text-base font-bold text-purplish-blue">
                                  +${total}{period === "yearly" ? "/yr" : "/mo"}
                                </span>
                              </span>
                        </p>
                    </div>
                    <Footer/>
                </fieldset>
            </div>
        </div>
    );
};

export default FourthStep;
