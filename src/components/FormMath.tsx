import MathField from "../elements/MathField";
import StyledButton from "../styled/StyledButton";

interface FormMathProps {
    resolveAI: () => void;
}

const FormMath = ({ resolveAI }: FormMathProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resolveAI();
    };

    return (
        <form className="flex gap-4" onSubmit={handleSubmit}>
            <MathField />
            <StyledButton>Enviar</StyledButton>
        </form>
    );
};

export default FormMath;
