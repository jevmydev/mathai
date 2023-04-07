import { EditableMathField, type MathField } from "react-mathquill";
import { useLatex } from "../hooks/useLatex";

const MathField = () => {
    const { latex, updateLatex } = useLatex();
    const handleChange = (mathField: MathField) => updateLatex(mathField.latex());

    return (
        <div className="flex-1 relative overflow-hidden flex items-center justify-start">
            {latex === "" && <span className="absolute left-5 whitespace-nowrap text-neutral-400 pointer-events-none">Escribe tu problema matemático...</span>}
            <EditableMathField latex={latex} onChange={handleChange} />
        </div>
    );
};

export default MathField;
