import { createContext, useState } from "react";

export const AgeContext = createContext();

export function AgeProvider({ children }) {
  const [ageResult, setAgeResult] = useState(null);

  return (
    <AgeContext.Provider value={{ ageResult, setAgeResult }}>
      {children}
    </AgeContext.Provider>
  );
}
