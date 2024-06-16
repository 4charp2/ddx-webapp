import * as S from './Header.styles'

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderCloseButton>Отмена</S.HeaderCloseButton>
      <S.HeaderCenterBlock>
        <S.Title>DDX TRAININGS</S.Title>
        <S.Text>бот</S.Text>
      </S.HeaderCenterBlock>
      <S.HeaderMenu>
        <S.MenuImg src="/img/menu.svg" />
      </S.HeaderMenu>
    </S.Header>
  )
}
