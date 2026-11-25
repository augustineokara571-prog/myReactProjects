import { useEffect, useState } from "react";
import { SunDim, Sun } from 'lucide-react';
import { Link } from "react-router-dom";

export default function AnTask() {
    const [amount, setAmount] = useState(5000.55);
    const [loading, setLoading] = useState(false);

    function waiter() {
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

    const [theme, setTheme] = useState('light')

    function changeToLight() {
        setTheme('light')
    }

    function changeToDark() {
        setTheme('dark')
    }

    return (
        <div className={`w-full items-center justify-center gap-1.5 h-screen flex flex-col ${theme
            == "light" ? "bg-white text-black" : "bg-black text-white"}`}>
            {(loading == true) && (<div>
                <span>Loading...</span>
            </div>)}
            {(loading == false) && (<div className="grid grid-col-1 gap-1">
                <h1 className="font-bold text-[whtite] relative top-10">Money in my account ${amount}</h1>
                <button className="border w-28 ml-14 py-1 relative top-10 focus:bg-teal-400 bg-[white] text-slate-900" onClick={addBalance}>Add Money</button>
                <button className="border py-1  mx-5 px-3 relative top-10 focus:bg-teal-400 bg-[white] text-slate-900 font-bold" onClick={reduceBalance}>Reduce Money</button>
            </div>)}

            <button onClick={changeToDark} className="relative bottom-65 left-124 flex">
                <Sun />
                <span>Dark</span>
            </button>

            <br />

            <button onClick={changeToLight} className="relative bottom-80 left-145 flex">
                <SunDim />
                <span>Light</span>
            </button>
            <Link to="/project"><button className="border-slate-800 animate-pulse relative left-130 bottom-75 shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] hover:bg-white py-2 px-5 mt-2">Go to my Project page</button></Link>


        </div>
    )
}