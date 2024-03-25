import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
        {/* <Footer /> */}
      </div>
    </Provider>
  );
}

export default App;
