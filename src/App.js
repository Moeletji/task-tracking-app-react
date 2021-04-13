import Header from "./components/Header" 

function App() {
const appHeader = "Todo Tracker"

  return (
    <div className="container">
      <Header title={appHeader} />
    </div>
  );
}

export default App;
