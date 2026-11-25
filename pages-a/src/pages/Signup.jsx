import { Link } from "react-router-dom"

export default function Signup() {
    return (
        <div className="bg-slate-900 min-h-screen">
            <div className="text-[27px] text-center text-indigo-700 font-bold">WELCOME TO MY SiGNUP PAGE</div>
            <div class="bg-slate-900 flex items-center justify-center">
                <div className="w-[80%] max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-xl p-6 space-y-1">

                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-bold tracking-tight text-white">Create your account</h1>
                        <p className="text-sm text-slate-400">Join us today to get started</p>
                    </div>

                    <form className="space-y-4" action="#" method="POST">

                        <div>
                            <label for="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="enter your full name here"
                                required
                                className="w-full px-3.5 hover:bg-slate-900 py-2.5 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                        </div>

                        <div>
                            <label for="email" className="block text-sm font-medium text-slate-300 mb-1">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="enter your email"
                                required
                                className="w-full px-3.5 hover:bg-slate-900  py-2.5 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                        </div>

                        <div>
                            <label for="password" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                required
                                className="w-full px-3.5 hover:bg-slate-900  py-2.5 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                        </div>

                        <div>
                            <label for="confirm-password" className="block text-sm font-medium text-slate-300 mb-1">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="••••••••"
                                required
                                className="w-full px-3.5 hover:bg-slate-900  py-2.5 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                required
                                className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-800"
                            />
                            <label for="terms" className="ml-2 text-xs text-slate-400">
                                I agree to the <a href="#" class="text-indigo-400 hover:text-indigo-300 underline">Terms of Service</a> and <a href="#" class="text-indigo-400 hover:text-indigo-300 underline">Privacy Policy</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800 text-white font-medium text-sm rounded-lg shadow-md transition-colors"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-xs text-slate-400">
                        Already have an account?
                        <a href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Sign in</a>
                    </p>

                </div>
            </div>
            <svg className="size-6 animate-bounce bg-[white] h-12 relative left-290 bottom-28 mt-5 border-[2px] border-gray-300 w-12 py-2.5 px-2.5 rounded-full text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <a href="/adding"><button className="border-slate-800 border border-[2px] left-280 bottom-30 relative bg-pink-500 rounded-[7px] hover:bg-blue-800 py-2 px-10 mt-3">Adding</button></a>

        </div>
    )
}