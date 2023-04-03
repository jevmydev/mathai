import StyledCenter from "../styled/StyledCenter";
import StyledTitle from "../styled/StyledTitle";

const Header = () => {
    return (
        <header className="absolute w-full z-10">
            <StyledCenter>
                <StyledTitle>MathAI</StyledTitle>
            </StyledCenter>
        </header>
    );
};

export default Header;
