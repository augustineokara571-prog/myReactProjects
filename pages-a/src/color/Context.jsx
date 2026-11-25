import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export default function ColorContextProvider({ children }) {
  const [color, setColor] = useState("blue");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  return useContext(ColorContext);
}

export function Box({ children }) {
    return (
        <div style={{ border: '2px solid #000', padding: '16px' }}>
            {children}
        </div>
    );
}

export function Card({ children }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <h2>My Card</h2>
            {children}
        </div>
    );
}