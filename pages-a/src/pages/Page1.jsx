import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTextData } from "../context/TextContext";

export default function Page1(){
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const {name, setName} = useTextData();

    function save(){
        setName(text);
        navigate('/page2');
    }
    return (
        <div>
            <span>Page 1</span>
            <br/>
            <input placeholder="Enter Text" className="border px-3 py-1 mr-2" onChange={function (event){
                setText(event.target.value);
            }}/>
            <br/>
            <button onClick={save} className="border px-3 py-1 mr-2">Save</button>
            <br/>
            {name}
            <br/>
        </div>
    )
}