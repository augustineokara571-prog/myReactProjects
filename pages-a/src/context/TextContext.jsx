import { createContext, useContext, useState } from "react";

const TextContext = createContext();

export default function TextContextProvider({children}){
    const [name, setName] = useState('chidera');
    return (
        <TextContext.Provider value={{name, setName}}>
            {children}
        </TextContext.Provider>
    )
}

export function useTextData(){
    return useContext(TextContext);
}