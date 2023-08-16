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
        <div className="absolute w-full md:py-4 md:px-20 md:relative top-24 md:top-0">
            <div className="md:w-[28rem]">
                <fieldset className="flex flex-col justify-between h-[84vh] md:h-[33rem] ">
                    <div className="w-[90%] mb-8 md:mb-0 md:w-full shadow-lg md:shadow-none mx-auto bg-white rounded-md px-4 md:px-0 py-7 text-left">
                        <legend className="font-bold text-xl md:text-4xl mb-2">
                            Finishing up
                        </legend>
                        <p className="text-cool-gray text-base mb-6 max-w-[16rem] md:max-w-none">
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
                                        className="text-cool-gray underline text-sm text-left hover:text-purplish-blue transition-all duration-200"
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
                        <p className="flex mt-5 justify-between">
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
