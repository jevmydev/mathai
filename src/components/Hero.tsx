import StyledCenter from "../styled/StyledCenter";

import PlayGround from "./PlayGround";
import FormMath from "./FormMath";

const Hero = () => {
    return (
        <section>
            <StyledCenter className="min-h-screen max-h-screen flex gap-4 flex-col justify-between" isAvoidHeader>
                <PlayGround />
                <FormMath />
            </StyledCenter>
        </section>
    );
};

export default Hero;
