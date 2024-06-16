import { Container, GlobalStyles, Wrapper } from "./App.styles"
import { Header } from "./components/header/Header"
import { MainPage } from "./pages/main-page/MainPage"
import { AppRoutes } from "./routes/Routes"

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
        <Header />
        <AppRoutes>
          <MainPage />
        </AppRoutes>
        </Container>
      </Wrapper>
    </>
  )
}

export default App
