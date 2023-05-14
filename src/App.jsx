import { Provider } from "react-redux";
import store from "./redux/store";
import BarangList from "./components/BarangList";

import './main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BarangList />
      </div>
    </Provider>
  );
};

export default App;
