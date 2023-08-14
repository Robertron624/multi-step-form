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
        <div className="absolute md:relative top-24 md:top-0">
            <form className="md:h-full" onSubmit={handleSubmit(saveData)} action="" method="POST">
                <fieldset className="flex flex-col justify-between md:justify-start h-[84vh] md:h-full md:bg-white">
                    <div className="w-[90%] md:w-auto shadow-lg md:shadow-none mx-auto bg-white rounded-md px-4 py-7 text-left">
                        <legend className="font-bold text-xl mb-2">
                            Personal info
                        </legend>
                        <p className="text-cool-gray text-base mb-6">
                            Please provide your name, email address, and phone
                            number.
                        </p>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-xs font-medium text-marine-blue mb-2"
                            >
                                Name
                            </label>
                            <input
                                className="border w-full border-light-gray pl-4 rounded-sm"
                                type="text"
                                placeholder="e.g. Stephen King"
                                id="name"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                            {errors.name && (
                                <small className="text-sm text-red-400">
                                    {errors?.name?.message?.toString()}
                                </small>
                            )}
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-xs font-medium text-marine-blue mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                className="border w-full border-light-gray pl-4 rounded-sm"
                                type="email"
                                id="email"
                                placeholder="e.g. stephenking@lorem.com"
                                {...register("email", {
                                    required: "Email is required",
                                    validate: (value) =>
                                        value?.includes("@") ||
                                        "Email must include @",
                                })}
                            />
                            {errors.email && (
                                <small className="text-sm text-red-400">
                                    {errors?.email?.message?.toString()}
                                </small>
                            )}
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="phone"
                                className="block text-xs font-medium text-marine-blue mb-2"
                            >
                                Phone Number
                            </label>
                            <input
                                className="border w-full border-light-gray pl-4 rounded-sm"
                                type="tel"
                                id="phone"
                                placeholder="e.g. +1 234 567 890"
                                {...register("phone", {
                                    required: "Phone number is required",
                                })}
                            />
                            {errors.phone && (
                                <small className="text-sm text-red-400">
                                    {errors?.phone?.message?.toString()}
                                </small>
                            )}
                        </div>
                    </div>
                    <Footer />
                </fieldset>
            </form>
        </div>
    );
};

export default FirstStep;
