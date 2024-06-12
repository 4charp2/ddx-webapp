import { Link } from 'react-router-dom'
import * as S from './MainPage.styles'

export const MainPage = () => {
  return (
    <>
      <Link to="/">
        <S.HeaderLogo
          src="/img/logo.svg"
          alt="logo"
        />
        <S.HeaderLogoText>DDX FITNESS</S.HeaderLogoText>
      </Link>
    </>
  )
}
