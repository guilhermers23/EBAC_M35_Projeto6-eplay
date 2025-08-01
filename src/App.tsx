import Header from "./components/Header";
import AppRoutes from "./routes";
import GlobalStyles, { Container } from "./styles/GlobalStyles";

const App = () => (
  <>
    <GlobalStyles />
    <Container>
      <Header />
    </Container>
    <AppRoutes />
  </>
);

export default App;
