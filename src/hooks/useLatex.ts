import { useContext } from "react";
import { LatexContext } from "../context/latex";

export const useLatex = () => {
    const latexContext = useContext(LatexContext);
    if (latexContext === undefined || latexContext === null) throw new Error("useLatex no tiene acceso a latexContext");

    return latexContext;
};
