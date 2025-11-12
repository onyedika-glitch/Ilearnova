import React from 'react';
import FormField from './components/FormField';
import Button from './components/Button';
import SocialButton from './components/SocialButton';

const SignupForm = () => {
    return (
<div classname="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8">
 <img alt="ILearnova logo" classname="mb-4" height="50" src="https://storage.googleapis.com/a1aa/image/dnES7dM35lJrFpp7Dea2pJfeUGkTq9ZJ67P71rgZfiJcemvfE.jpg" width="100"/>
 <h1 classname="text-2xl font-bold mb-2">
  Welcome To
  <span classname="text-blue-600">
   ILearnova
  </span>
 </h1>
 <form classname="w-full max-w-sm">
  <formfield label="Enter first name" type="text" value="Priscilla">
  </formfield>
  <formfield label="Enter last name" type="text" value="Daniel">
  </formfield>
  <formfield label="Enter phone number" type="text" value="234 - 7067980021">
  </formfield>
  <div classname="mb-4">
   <label classname="block text-gray-700 text-sm font-bold mb-2">
    Role Selection
   </label>
   <select classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    <option>
     Select
    </option>
   </select>
  </div>
  <formfield label="Enter email address" type="email" value="priscilladaniel@gmail.com">
  </formfield>
  <formfield label="Enter Password" type="password" value="Priscilla Daniel">
  </formfield>
  <p classname="text-red-500 text-xs italic mt-2">
   Password must contain 6-17 characters. It must include uppercase, lowercase, numbers, and special characters
  </p>
  <button text="Sign up">
  </button>
  <div classname="text-center">
   <p classname="text-gray-700">
    Already have an account?
    <a classname="text-blue-600" href="#">
     Login in
    </a>
   </p>
  </div>
  <div classname="text-center mt-4">
   <p classname="text-gray-700">
    Or sign in with
   </p>
   <div classname="flex justify-center mt-2">
    <socialbutton iconclass="fab fa-google text-red-500">
    </socialbutton>
    <socialbutton iconclass="fab fa-facebook-f text-blue-600">
    </socialbutton>
    <socialbutton iconclass="fab fa-twitter text-blue-400">
    </socialbutton>
   </div>
  </div>
 </form>
</div>
);
};

export default SignupForm;
