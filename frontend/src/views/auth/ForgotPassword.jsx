import InputField from "components/fields/InputField";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="mb-16 mt-8 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className=" w-full max-w-full flex-col items-center  md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2 text-center text-4xl font-bold text-navy-700 dark:text-white">
          Welcome to <span className="text-blue-500"> Ilearnova</span>
        </h4>
        <p className="mb-12 text-center text-sm dark:text-white">
          Unlock your account with a simple password reset. <br /> Please enter
          your username or email{" "}
        </p>
        <InputField
          variant="auth"
          extra="mb-3"
          label="Enter email address"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Submit
        </button>
        <div className="mt-4">
          <Link
            to="/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Go back to Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
