import { createContext, useState } from "react";
import { type QueryLatex, type LatexType } from "../types";

export const LatexContext = createContext<LatexType | null>(null);

export const LatexProvider = ({ children }: { children: JSX.Element }) => {
    const [latex, setLatex] = useState<QueryLatex>("");

    const updateLatex = (newLatex: QueryLatex) => {
        setLatex(newLatex);
    };

    return (
        <LatexContext.Provider
            value={{
                latex,
                updateLatex
            }}
        >
            {children}
        </LatexContext.Provider>
    );
};
