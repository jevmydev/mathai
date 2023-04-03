import { useState } from "react";
import { EditableMathField, type MathField } from "react-mathquill";

const MathField = () => {
    const [latex, setLatex] = useState<string>("");

    const handleChange = (mathField: MathField) => setLatex(mathField.latex());

    return (
        <div className="flex-1 relative overflow-hidden flex items-center justify-start">
            {latex === "" && <span className="absolute left-5 whitespace-nowrap text-neutral-400 pointer-events-none">Escribe tu problema matemático...</span>}
            <EditableMathField latex={latex} onChange={handleChange} />
        </div>
    );
};

export default MathField;
