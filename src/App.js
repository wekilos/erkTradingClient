
import './App.css';
import ErkContextProvider from "./context/Condex";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
        <ErkContextProvider>
         <Routes/>
      </ErkContextProvider>
    </div>
  );
}

export default App;
