import { Provider as TodosProvider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <TodosProvider store={store}>
        <main></main>
      </TodosProvider>
    </div>
  );
}

export default App;
