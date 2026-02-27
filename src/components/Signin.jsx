import React, { useState } from 'react';
import axios from 'axios'
function Signin() {

    const [isSignUp, setIsSignUp] = useState(true);


    // 1. Setup state for form inputs
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        remember: false
    });

    // hadmel Register
    async function handleRegister(e) {
        e.preventDefault();
        try {
            const response = await axios.post("https://shopeglobe-backend-1.onrender.com/api/register", formData)
            console.log(response.data);
            alert("User Registered")
            setFormData({
                fullName: '',
                email: '',
                password: '',
                remember: false
            })
            setIsSignUp(true);
        } catch (error) {
            console.log(error.message);
            alert("Registration Failed")

        }

    }

    //handleLogin
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post("https://shopeglobe-backend-1.onrender.com/api/login", formData)
            console.log(response.data);
            alert(`Welcome ${response.data.user.fullName}`)
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setFormData({
                fullName: '',
                email: '',
                password: '',
                remember: false
            })

        } catch (error) {
            console.log(error.message);
            alert("Login Failed")

        }

    }

    // 2. Handle input changes dynamically
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isSignUp) {
            handleRegister(e);
        } else {
            handleLogin(e);
        }
    };
    // // 3. Handle form submission (The "Backend Connection")
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("Sending to ShopGlobe Backend:", formData);

    //     try {
    //         // Example fetch request
    //         // const response = await fetch('YOUR_BACKEND_URL/api/auth/login', {
    //         //   method: 'POST',
    //         //   headers: { 'Content-Type': 'application/json' },
    //         //   body: JSON.stringify(formData)
    //         // });
    //         // const result = await response.json();
    //     } catch (error) {
    //         console.error("Login failed:", error);
    //     }




    return (
        <div>
            <section className="bg-transparent">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        ShopGlobe
                    </a>
                    <div className="w-full bg-neutral-900 rounded-lg shadow border border-white/10 md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                {!isSignUp && (
                                    <div>
                                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-white">Your Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={(e) => handleChange(e)}
                                            className="bg-neutral-800 border border-white/10 text-white rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 placeholder-gray-400"
                                            placeholder="name@company.com"
                                            required
                                        />
                                    </div>
                                )}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-neutral-800 border border-white/10 text-white rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 placeholder-gray-400"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="bg-neutral-800 border border-white/10 text-white rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 placeholder-gray-400"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                name="remember"
                                                type="checkbox"
                                                checked={formData.remember}
                                                onChange={handleChange}
                                                className="w-4 h-4 border border-white/10 rounded bg-neutral-800 focus:ring-3 focus:ring-red-500 text-red-500"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-red-500 hover:text-red-400 hover:underline">Forgot password?</a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-[#c10000] hover:bg-red-800 transition-colors focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    {!isSignUp ? "Register" : "Login to your account"}
                                </button>
                                <p className="text-sm font-light text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-red-500 hover:text-red-400 hover:underline" onClick={() => setIsSignUp((prev) => !prev)}>
                                        {!isSignUp ? "Log in " : "Sign up"}
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}


export default Signin;