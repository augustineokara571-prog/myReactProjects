import { createContext, useContext, useState } from "react";


const UserContext = createContext();

export default function UserContextProvider({children}){
    const [userInfo, setUserInfo] = useState({
        'username': null,
        'fullname': null
    });

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}


export function useUserContext(){
    return useContext(UserContext);
}