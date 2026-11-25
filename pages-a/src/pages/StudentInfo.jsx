import {useState} from "react";

export default function StudentInfo(){

    const [student, setStudent] = useState([]);

    async function handleSubmit(e){
        e.preventDefault();
        const res = await fetch('http://localhost:3000/adding', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: student
            })
        });
        const data = await res.json();
        alert(data.message);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Student Name" onChange={function (e) {
                    setStudent(e.target.value)
                }}/>
                <button>Add Student</button>
            </form>
        </div>
    )
}