import { createRoot } from "react-dom/client";
import App from "./components/App";
const root = createRoot(document.getElementById("root"));
import store from "./components/redux/store.js";
import { Provider } from "react-redux";
//

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
