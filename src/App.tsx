import Banner from "./components/Banner";
import Header from "./components/Header";
import GlobalStyles, { Container } from "./styles/GlobalStyles";

const App = () => (
  <>
    <GlobalStyles />
    <Container>
      <Header />
    </Container>
    <Banner />
  </>
);

export default App;
