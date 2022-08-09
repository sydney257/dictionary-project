import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header mt-4">Dictionary</h1>
        <main>
          <Dictionary defaultValue="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/sydney257/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced code
            </a>{" "}
            by Sydney Mercado
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
