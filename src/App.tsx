import Header from "./components/Header";
import Hero from "./components/Hero";
import Blur from "./elements/Blur";

const App = () => {
    return (
        <>
            <Blur />
            <Header />
            <main>
                <Hero />
            </main>
        </>
    );
};

export default App;
