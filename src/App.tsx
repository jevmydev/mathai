import Header from "./components/Header";
import Hero from "./components/Hero";
import Blur from "./elements/Blur";

import { LatexProvider } from "./context/latex";

const App = () => {
    return (
        <LatexProvider>
            <>
                <Blur />
                <Header />
                <main>
                    <Hero />
                </main>
            </>
        </LatexProvider>
    );
};

export default App;
