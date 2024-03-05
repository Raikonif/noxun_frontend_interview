import MainComponent from "./components/MainComponent";
import TextInputProvider from "./context/TexInputProvider.tsx";

function App() {
    return (
        <>
            <TextInputProvider>
                <MainComponent/>
            </TextInputProvider>
        </>
    );
}

export default App;
