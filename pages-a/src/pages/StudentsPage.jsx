import StudentCard from "../components/StudentCard";
import { useState } from "react";

export default function StudentsPage() {
    const [students, setStudents] = useState([

        {
            name: 'John Doe',
            age: 28,
            grade: '10th'
        },
        {
            name: 'Alex Johnson', 
            age: 16, 
            grade: '9th'
        },
        {
            name: 'Sophia Chen', 
            age: 18, 
            grade: '12th'
        },
        {
            name: 'Maria Garcia', 
            age: 17, 
            grade: '11th'
        }
    ]);

    return (
        <div>
            <a href="/text2"><button className="border-slate-800 border animate-pulse relative top-10 ml-3 border-[2px] bg-pink-500 rounded-[7px] hover:bg-blue-800 py-2 px-10 mt-3">Text2 page</button></a>
            {students.map((item, index) => {
                return <StudentCard 
                    key={index}
                    name={item.name} 
                    age={item.age} 
                    grade={item.grade} />
              
            })}
        </div>
    )
}