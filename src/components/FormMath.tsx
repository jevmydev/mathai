import MathField from "../elements/MathField";
import StyledButton from "../styled/StyledButton";

const FormMath = () => {
    return (
        <form className="flex gap-4">
            <MathField />
            <StyledButton>Enviar</StyledButton>
        </form>
    );
};

export default FormMath;
