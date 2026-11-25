export default function Land() {
    return (
        <div className="flex flex-col justify-start items-center min-h-screen bg-sky-600">
            <div className="text-emerald-800 text-[30px] font-bold">WELCOME TO MY PAGES</div>
            <svg className="size-6 animate-bounce bg-[white] h-12 mt-3 border-[2px] border-gray-300 w-12 py-2.5 px-2.5 rounded-full text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <a href="/login"><button className="border-[black] animate-pulse border shadow-md border-[2px] bg-teal-400 rounded-[7px] hover:bg-blue-800 py-2 px-10 mt-3">Login</button></a>
        </div>
    )
}