export default function Clients({name = 'Chidera David', age = '10', phonenumber 
='419' }) {
    const splittedname = name.split(' ');
    let avatarId = "";
    //['John', 'Doe']
    // splittedname[0] 'John'
    // splittedname[0][0] 'J'
    // splittedname[1][0] 'D'

    if (splittedname.length > 1) {
        const firstletter = splittedname[0][0];
        const secondletter = splittedname[1][0];
        avatarId = firstletter + secondletter;
    } else if (splittedname.length == 1) {
        const firstletter = splittedname[0][0];
        avatarId = firstletter;
    }

    return (
        <div className="max-w-sm mx-auto bg-[white] rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-semibold">
                        {avatarId}
                    </div>
                </div>
            </div>
            <div className="text-xl font-medium text-[black]">{name}</div>
            <p className="text-gray-500 text-sm">Age: {age}</p>
            <p className="text-gray-500 text-sm">📞 {phonenumber}</p>
        </div>
    )

}