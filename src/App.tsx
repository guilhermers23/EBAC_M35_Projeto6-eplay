import { Provider } from "react-redux";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <AppRoutes />
  </Provider>
);

export default App;
