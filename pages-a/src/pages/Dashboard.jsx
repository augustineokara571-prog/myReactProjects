import { useUserContext } from "../context/UserContext"
import { Link } from "react-router-dom";

export default function Dashboard() {
    const { userInfo } = useUserContext();
    return (
        <div>
            Fullname: {userInfo.fullname}
            <br />
            Username: {userInfo.username}
            <Link to="/doggenerator"><button className="border-slate-800 hover:bg-green-600 relative left-245 bottom-3 shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] py-2 px-5 mt-2">Go to doggenerator</button></Link>
        </div>
    )
}