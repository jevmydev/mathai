import { useResolveIA } from "../hooks/useResolveIA";
import { useLatex } from "../hooks/useLatex";
import StyledCenter from "../styled/StyledCenter";

import PlayGround from "./PlayGround";
import FormMath from "./FormMath";
import Loading from "../elements/Loading";
import Error from "../elements/Error";

const Hero = () => {
    const { resolve, error, loading, updateResolve } = useResolveIA();
    const { latex } = useLatex();

    const resolveAI = () => updateResolve(latex);

    return (
        <section>
            <StyledCenter className="min-h-screen max-h-screen flex gap-4 flex-col justify-between" isAvoidHeader>
                {resolve && !loading && !error && <PlayGround resolve={resolve} />}
                {loading && <Loading />}
                {error && <Error />}
                <FormMath resolveAI={resolveAI} />
            </StyledCenter>
        </section>
    );
};

export default Hero;
