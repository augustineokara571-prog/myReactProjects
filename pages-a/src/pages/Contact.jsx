import { useState } from "react";

export default function Contact(){
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [editing, setEditing] = useState(false);
    const [textIndexToEdit, setTextIndexToEdit] = useState(0);
    const [editedText, setEditedText] = useState('');

    function addToTodos() {
        const newTodos = [...todos];
        newTodos.push(text);
        setTodos(newTodos);
        setText('');
    }

    function editTodo(index) {
        setEditing(true);
        setTextIndexToEdit(index);
        setEditedText(todos[index]);
    }

    function edit() {
        const newTodos = [...todos];
        newTodos[textIndexToEdit] = editedText;
        setTodos(newTodos);
        setEditedText('');
        setEditing(false);
    }

    
    return (
        <div>
            {(editing == true) && (<div className="min-h-screen w-full absolute top-1 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-gray-400 text-[white] h-65 w-1/2 rounded-3xl gap-3">
                <span className="text-[25px] font-bold">Editing</span>
                <input type="text" value={editedText} className="border border-[white] text-[white]" onChange={function (event) {
                    setEditedText(event.target.value);
                }} onKeyDown={function (event) {
                    if (event.key == "Enter") {
                        edit();
                    }
                }} />
                <button className="border bg-gray-800 text-[white] px-2 py-1 rounded-2xl w-1/5" onClick={edit}>Edit</button>
                </div>
            </div>)}

            <input type="text" value={text} onChange={function (event) {
                setText(event.target.value);
            }} onKeyDown={(event) => {
                if (event.key == 'Enter') {
                    addToTodos();
                }
            }} />
            <button onClick={addToTodos}>Add Task</button>

            <div>
                <span>TODOS</span>
                <ul>
                    {
                        todos.map(function (todo, i) {
                            return (
                                <li key={i}>{todo} <button className="border bg-amber-800 text-[white] px-2 py-1 rounded-2xl" onClick={() =>editTodo(i)}>Edit</button> </li>
                            )
                        })
                    }
                </ul>
            </div>
            <a href="/clients"><button className="border-slate-800 border animate-pulse relative top-110 ml-270 border-[2px] bg-pink-500 rounded-[7px] hover:bg-blue-800 py-2 px-10 mt-3">Clients</button></a>
        </div>
    )
}