import * as S from './Navigation.styles'

export const Navigation = ({ buttonNav }) => {
  return (
    <S.NavBlock>
      <S.NavOrder>
        {buttonNav.map((button) => (
          <S.NavElement key={button.id}>{button.name}</S.NavElement>
        ))}
      </S.NavOrder>
    </S.NavBlock>
  )
}
