import { Link } from "react-router-dom"
import { useState } from "react"

export default function Text(){
    const [text, setText] = useState("My brother");
    const [showing, setShowing] = useState("");

    function changer(){
        setShowing(text);
    }
    return (
        <div className="px-2">
            <input type="text" className="border px-3 py-1 mr-2" onKeyDown={function(event) {
                if(event.key == 'Enter'){
                    changer()
                }
            }} value={text} onChange={
                function(event){
                    setText(event.target.value);
                }
            }/>
            <button className="border px-3 py-1" onClick={changer}>Show</button>
            <br/>
            <div className="border h-100 min-w-100 my-2">{showing}</div>
            <Link to="/todolist"><button className="border-slate-800 shadow-md border border-[2px] bg-slate-900 text-white relative top-2 font-bold rounded-[7px] hover:bg-emerald-600 py-2 px-5">TodoList</button></Link>

        </div>
    )
}