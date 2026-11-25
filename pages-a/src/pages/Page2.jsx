import { Link } from 'react-router-dom';
import { useTextData } from "../context/TextContext"
export default function Page2(){
    const {name} = useTextData();
    return (
        <div>
            <span>page 2</span>
            <br/>
            <span>{name}</span>
            <br/>
             <Link to="/taskpage1"><button className="border-slate-800 hover:bg-green-600 relative left-270 bottom-11 shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] py-2 px-5 mt-2">Go to task Page 1</button></Link>
        </div>
    )
}