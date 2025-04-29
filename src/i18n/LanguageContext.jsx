import { createContext, useContext, useState } from "react";

export const LanguageCtx = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");          // "en" | "th"

  return (
    <LanguageCtx.Provider value={{ lang, setLang }}>
      {children}
    </LanguageCtx.Provider>
  );
}

/* helper hook */
export const useLang = () => useContext(LanguageCtx);
