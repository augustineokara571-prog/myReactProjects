export default function Extext2({ name, image}) {
    return (
        <div className="max-w-sm mx-auto bg-[white] rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
            <div className="flex grid-cols-3 grid gap-4">
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-semibold"></div>
                </div>
            </div>
            <div>
                <h1 className="text-[30px] font-medium text-[black]">{name}</h1>
                <p>Image: {image}</p>
            </div>
        </div>
    )
}