import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import Footer from "../components/Footer";

const FirstStep = () => {
    // Using appState

    const [state, setState] = useAppState();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ defaultValues: state, mode: "onSubmit" });

    const navigate = useNavigate();

    interface FormData {
        name: string;
        email: string;
        phone: string;
    }

    const saveData = (data: Partial<FormData>) => {
        setState({
            ...state,
            ...data,
        });
        navigate("/second");
    };

    return (
        <div className="absolute md:py-4 md:px-16 md:relative top-24 md:top-0">
            <form className="md:h-full" id="personal-info" onSubmit={handleSubmit(saveData)} action="" method="POST">
                <fieldset className="flex flex-col justify-between md:justify-start h-[84vh] md:h-full md:bg-white">
                    <div className="w-[90%] mb-8 md:mb-16 md:w-auto shadow-lg md:shadow-none mx-auto bg-white rounded-md px-4 py-7 text-left">
                        <legend className="font-bold text-xl md:text-4xl mb-2">
                            Personal info
                        </legend>
                        <p className="text-cool-gray text-base mb-6">
                            Please provide your name, email address, and phone
                            number.
                        </p>
                        <div>
                            <label
                                htmlFor="name"
                                className="flex items-center justify-between text-xs font-medium text-marine-blue mb-2 md:text-sm"
                            >
                                Name
                                {errors.name && (
                                <small className="text-sm text-strawberry-red font-bold">
                                    {errors?.name?.message?.toString()}
                                </small>
                            )}
                            </label>
                            <input
                                className={`border font-bold w-full border-light-gray pl-4 md:py-2 rounded-md ${errors.name ? "border-strawberry-red" : ""} focus-within:outline-purplish-blue`}
                                type="text"
                                placeholder="e.g. Stephen King"
                                id="name"
                                {...register("name", {
                                    required: "This field is required",
                                })}
                            />
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="flex items-center justify-between text-xs font-medium text-marine-blue mb-2 md:text-sm"
                            >
                                Email Address
                                {errors.email && (
                                <small className="text-sm text-strawberry-red font-bold">
                                    {errors?.email?.message?.toString()}
                                </small>
                            )}
                            </label>
                            <input
                                className={`border w-full font-bold border-light-gray pl-4 md:py-2 rounded-md ${errors.email ? "border-strawberry-red" : ""} focus-within:outline-purplish-blue`}
                                type="email"
                                id="email"
                                placeholder="e.g. stephenking@lorem.com"
                                {...register("email", {
                                    required: "This field is required",
                                    validate: (value) =>
                                        value?.includes("@") ||
                                        "Email must include @",
                                })}
                            />
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="phone"
                                className="flex items-center justify-between text-xs font-medium text-marine-blue mb-2 md:text-sm"
                            >
                                Phone Number
                                {errors.phone && (
                                <small className="text-sm text-strawberry-red font-bold">
                                    {errors?.phone?.message?.toString()}
                                </small>
                            )}
                            </label>
                            <input
                                className={`border w-full font-bold border-light-gray pl-4 md:py-2 rounded-md ${errors.phone ? "border-strawberry-red" : ""} focus-within:outline-purplish-blue`}
                                type="tel"
                                id="phone"
                                placeholder="e.g. +1 234 567 890"
                                {...register("phone", {
                                    required: "This field is required",
                                })}
                            />
                        </div>
                    </div>
                    <Footer />
                </fieldset>
            </form>
        </div>
    );
};

export default FirstStep;
