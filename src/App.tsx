import { LatexProvider } from "./context/latex";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Blur from "./elements/Blur";

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
