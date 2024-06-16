import { Container, GlobalStyles, Wrapper } from './App.styles'
// import { Header } from "./components/header/Header"
import { MainPage } from './pages/main-page/MainPage'
import { AppRoutes } from './routes/Routes'
import { useTelegram } from '../src/hooks/useTelegram'

function App() {
  const {
    tgViewportHeight,
    tgUserId,
    tgUserFirstName,
    tgUserLastName,
    tgUserUsername,
  } = useTelegram()

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          {/* <Header /> */}
          <AppRoutes>
            <MainPage />
          </AppRoutes>
        </Container>
      </Wrapper>
    </>
  )
}

export default App
