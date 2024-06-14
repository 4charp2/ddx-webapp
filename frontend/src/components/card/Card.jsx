import * as S from './Card.styles'

export const Card = ({ title, heading, complexity, id }) => {
  return (
    <S.CardCourse>
      <S.CardImg src={`/img/${id}.png`}></S.CardImg>

      <S.CardTop>
        <S.CardHeading>Cложность:</S.CardHeading>
        <S.TopBlock>
          {complexity.map((el, index) => (
            <S.TopComplexity
              key={index}
              src={
                el === 'true'
                  ? '/img/complexity.svg'
                  : '/img/complexity-opacity.svg'
              }
            />
          ))}
        </S.TopBlock>
      </S.CardTop>
      <S.CardContent>
        <S.ContentLeft>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardHeading>{heading}</S.CardHeading>
        </S.ContentLeft>
        <S.ContentArrow src="/img/arrow.svg"></S.ContentArrow>
      </S.CardContent>
    </S.CardCourse>
  )
}
