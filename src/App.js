import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header mt-4">Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Sydney Mercado</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
