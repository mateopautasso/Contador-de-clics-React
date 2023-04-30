import "./styles/index.css"
import ContadorClic from "./components/contador-clicks/ContadorClick";

function App() {
    return(
        <main className="main-container">
            <h1 className='title'>
                Contador de Clics
            </h1>
            <ContadorClic />
        </main>
    )
}

export default App;
