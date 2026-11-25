export default function StudentCard({ name, age, grade }) {
    return (
        <div className="max-w-sm mx-auto bg-[white] rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-semibold"></div>
                </div>
            </div>
            <h2 className="text-xl font-medium text-[black]">{name}</h2>
            <p  className="text-gray-500 text-sm">Age: {age}</p>
            <p className="text-gray-500 text-sm">Grade: {grade}</p>
        </div>
    )
}