import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex flex-col justify-start items-center min-h-screen bg-slate-900">
            <div className=" text-[27px] text-fuchsia-600 mb-5 font-bold">WELCOM TO MY LOGIN PAGE</div>
                <div className="w-[31%] space-y-2 rounded-2xl  bg-slate-800 p-8 shadow-xl">

                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-violet-700">Welcome back</h2>
                        <p className="mt-2 text-sm text-gray-500">Please enter your details to sign in.</p>
                    </div>

                    <form className="space-y-4" action="#" method="POST">

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-500">Email address</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                    placeholder="enter your email" />
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                    placeholder="••••••••" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label for="remember-me" class="ml-2 block text-sm text-gray-600">Remember me</label>
                            </div>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                        <div>
                            <button type="submit"
                                className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150">
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?
                        <a href="signup" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign up</a>
                    </p>

                </div>
                <svg className="size-6 relative left-130 bottom-4 animate-bounce bg-[white] h-12 mt-5 border-[2px] border-gray-300 w-12 py-2.5 px-2.5 rounded-full text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7  7V3" />
            </svg>
            <Link to="/signup"><button className="border-slate-800 animate-pulse relative left-130 bottom-4 shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] hover:bg-white py-2 px-5 mt-2">Go to Signup</button></Link>
        </div>
    )
}