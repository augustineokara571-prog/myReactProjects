import { useParams } from "react-router-dom"

export default function Product() {
    const { id } = useParams();
    return (
        <div className="justify-center items-center min-h-screen flex flex-col gap-3">
            <span>this is product {id} </span>
            <a href="/contact"><button className="border-slate-800 border animate-pulse border-[2px] bg-slate-800 rounded-[7px] hover:bg-blue-800 py-2 px-10 mt-3">Contact</button></a>
        </div>
    )
}