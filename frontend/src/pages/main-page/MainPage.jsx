import { useNavigate } from 'react-router-dom'
import * as S from './MainPage.styles'
import { Navigation } from '../../components/navigation/Navigation'

const buttonNavMain = [
  { id: 1, name: 'CHALLENGE' },
  { id: 2, name: 'ДОМ' },
  { id: 3, name: 'ГАНТЕЛИ' },
  { id: 4, name: 'ЗАЛ' },
]

export const MainPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <S.Logo onClick={() => navigate('/')}>
        <S.LogoImg
          src="/img/logo.svg"
          alt="logo"
        />
        <S.LogoText>DDX FITNESS</S.LogoText>
      </S.Logo>
      <Navigation buttonNav={buttonNavMain} />
    </>
  )
}
