import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function DmSignup() {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const { setUserInfo } = useUserContext();
    const navigate = useNavigate();

    function formsubmit(event) {
        event.preventDefault();

        setUserInfo(
            {
                "fullname": fullname,
                "username": username
            }
        );

        navigate('/dashboard');
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col" onSubmit={formsubmit}>
                <input id="fullname" name="fullname" placeholder="Enter Full Name" value=
                    {fullname} onChange={function (event) {
                        setFullname(event.target.value);
                    }} />
                <input id="username" name="username" placeholder="Enter Username" value=
                    {username} onChange={function (event) {
                        setUsername(event.target.value);
                    }} />

                <button type="submit">Signup</button>
                <Link to="/dashboard"><button className="border-slate-800 hover:bg-green-600 relative left-130 bottom-70 shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] py-2 px-5 mt-2">Go to Dashboard</button></Link>
            </form>
        </div>
    )
}