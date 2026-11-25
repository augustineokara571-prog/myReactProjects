import Client from "../components/Client"
import { useState } from "react";

export default function Clients() {
    const [listofclients, setListOfClients] = useState([
        {
            name: 'John Doe',
            age: 28,
            phonenumber: '+1 (255) 345 432'
        },
        {
            name: 'Daniel Micheal',
            age: 35,
            phonenumber: '+1 (255) 345 432'
        },
        {
            name: 'David Paul',
            age: 40,
            phonenumber: '+1 (255) 345 432'
        },
        {
            name: 'Micheal Jordan',
            age: 57,
            phonenumber: '+1 (255) 345 432'
        },
        {
            name: 'Emmanuel Jordan',
            age: 47,
            phonenumber: '+1 (255) 443 562'
        },
        {
            age: 47,

        }]);
    return (
        <div>
            <h1 className="font-bold text-[30px] ml-2">Clients</h1>
             <a href="/students"><button className="border-slate-800 border animate-pulse border-[2px] bg-pink-500 rounded-[7px] hover:bg-blue-800 py-2 px-10 mt-1">StudentPage</button></a>
            <div>
                {
                    listofclients.map(function (value, index) {
                        return (
                            <Client name={value.name} age={value.age} phonenumber=
                            {value.phonenumber} />
                        )
                    })
                }
            </div>
        </div>
    )
}