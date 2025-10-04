import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending, data } = useFormStatus();
  return (
    <button
      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70"
      disabled={pending}
    >
      {pending ? "Submitting..." : data?.message || "Get a free quote"}
    </button>
  );
};

export default Button;
