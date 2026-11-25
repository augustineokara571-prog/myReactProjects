import { useState } from "react";
import { Link } from "react-router-dom"

export default function DogGenerator() {
    const [image, setImage] = useState(null);
    async function generateImage() {
        const res = await fetch('https://api.thecatapi.com/v1/images/search');
        const jsondata = await res.json();
        const result = jsondata[0];
        const imagesource = result['url'];
        setImage(imagesource);
    }
    return (
        <div>
            <img src={image} width={200} height={200} />
            <button onClick={generateImage}>Generate</button>
            <Link to="/antask"><button className="border-slate-800 animate-pulse relative left-265 top-60 shadow-md border border-[2px] bg-fuchsia-500 rounded-[7px] hover:bg-white py-2 px-5 mt-2">Go to Antask</button></Link>
        </div>
    )
}