import { useState } from "react";
import { Link } from "react-router-dom"

export default function TodoList() {
    const [students, setStudents] = useState([]);
    const [text, setText] = useState("");

    function changer() {
        const newstudents = [...students];
        newstudents.push(text);
        setStudents(newstudents);
    }

    return (
        <div className="px-2 py-2">
            <input type="text" className="border px-3 py-1 mr-2" onKeyDown={function (event) {
                if (event.key == 'Enter') {
                    changer()
                }
            }} value={text} onChange={
                function (event) {
                    setText(event.target.value);
                }
            } />
            <button className="border px-3 py-1" onClick={changer}>Show</button>
            <Link to="/task"><button className="border-slate-800 shadow-md border border-[2px] bg-slate-900 text-white relative top-2 left-220 font-bold rounded-[7px] hover:bg-emerald-600 py-2 px-7">Task</button></Link>
            <br />
            {students.map(function (item, index) {
                return (
                    <div>{item}</div>
                )
            })}
        </div>
    )
}