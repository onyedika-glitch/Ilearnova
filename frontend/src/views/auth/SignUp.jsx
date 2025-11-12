import InputField from "components/fields/InputField";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="mb-16 mt-8 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className=" w-full max-w-full flex-col items-center  md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-6 text-center text-4xl font-bold text-navy-700 dark:text-white">
          Welcome to <span className="text-blue-500"> Ilearnova</span>
        </h4>

        <InputField
          variant="auth"
          extra="mb-3"
          label="Enter first name"
          placeholder="victor"
          id="first_name"
          type="text"
        />
        <InputField
          variant="auth"
          extra="mb-3"
          label="Enter last name"
          placeholder="david"
          id="last_name"
          type="text"
        />
        <InputField
          variant="auth"
          extra="mb-3"
          label="Enter phone number"
          placeholder="234-9063964547"
          id="phone"
          type="number"
        />
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Sign Up
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <Link
            to="/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
