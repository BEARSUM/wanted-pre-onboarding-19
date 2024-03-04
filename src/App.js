import GlobalStyles from "./global";

import { Provider as TodosProvider } from "react-redux";
import store from "./store/store";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <>
      <GlobalStyles />
      <TodosProvider store={store}>
        <header>Todo List</header>
        <main>
          <Form />
          <List />
        </main>
      </TodosProvider>
    </>
  );
}

export default App;
