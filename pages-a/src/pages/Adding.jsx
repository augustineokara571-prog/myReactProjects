import { useEffect, useState } from "react";
export default function Home() {
    const [amount, setAmount] = useState(5000.55);
    const [loading, setLoading] = useState(false);

    function waiter(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1500);
        })
    }

    async function addBalance() {
        setLoading(true);
        await waiter();
        let newamount = amount + 1000;
        setAmount(newamount);
        setLoading(false);
    }

    async function reduceBalance() {
        setLoading(true);
        await waiter();
        let newamount = amount - 1000;
        setAmount(newamount);
        setLoading(false);
    }

    useEffect(() => {
        addBalance();
    }, []);

    return (
        <div className="w-full items-center justify-center rounded-[400px] hover:bg-sky-700 bg-purple-700 min-h-screen flex flex-col">
            {(loading == true) && (<div>
                <span>Loading...</span>
            </div>)}
            {(loading == false) && (<div className="grid grid-col-1 gap-1">
            <h1 className="font-bold text-[whtite] relative top-10">Money in my account ${amount}</h1>
            <button className="border w-28 ml-14 py-1 relative top-10 focus:bg-teal-400 bg-[white] text-slate-900" onClick={addBalance}>Add Money</button>
            <button className="border py-1  mx-5 px-3 relative top-10 focus:bg-teal-400 bg-[white] text-slate-900 font-bold" onClick={reduceBalance}>Reduce Money</button>
            </div>)}
            <svg className="size-6 animate-bounce bg-[white] h-12 ml-160 relative top-42 mt-5 border-[2px] border-gray-300 w-12 py-2.5 px-2.5 rounded-full text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <a href="/product/555"><button className="border-slate-800 border animate-pulse relative top-43 ml-160 border-[2px] bg-pink-500 rounded-[7px] hover:bg-blue-800 py-2 px-10 mt-3">Product</button></a>
        </div>
    ) 
}