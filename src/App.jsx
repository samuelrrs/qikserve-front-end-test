import { Provider } from "react-redux";
import "../src/styles/global.css";
import Header from "./components/Header";
import Menu from "./pages/Menu";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Menu />
    </Provider>
  );
}

export default App;
