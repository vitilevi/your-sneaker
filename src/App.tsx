import Header from './components/Header';
import Carousel from './components/Carousel';
import GlobalStyle from './styles/global';
import { ContainerWrapper } from './styles/container';
import { FilterContextProvider } from './context/filterContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <FilterContextProvider>
        <ContainerWrapper>
          <Header />
          <Carousel />
        </ContainerWrapper>
      </FilterContextProvider>
    </>
  );
}

export default App;
