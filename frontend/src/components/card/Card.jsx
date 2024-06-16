import * as S from './Card.styles'

export const Card = ({ title, heading, complexity, id, typeWorkout }) => {
  return (
    <S.CardCourse $typeWorkout={typeWorkout}>
     {!typeWorkout && <S.CardImg  src={`/img/${id}.png`}></S.CardImg>} 

      <S.CardTop>
        <S.CardHeading $typeWorkout={typeWorkout}>Cложность:</S.CardHeading>
        <S.TopBlock>
          {complexity.map((el, index) => (
            <S.TopComplexity
              key={index}
              src="/img/complexity-opacity.svg"
              $complexity={el}
            />
          ))}

        </S.TopBlock>
      </S.CardTop>
      <S.CardContent>
        <S.ContentLeft>
          <S.CardTitle $typeWorkout={typeWorkout}>{title}</S.CardTitle>
          <S.CardHeading $typeWorkout={typeWorkout}>{heading}</S.CardHeading>
        </S.ContentLeft>
        <S.ContentArrow
          src={typeWorkout ? '/img/arrow-blue.svg' : '/img/arrow.svg'}
        ></S.ContentArrow>
      </S.CardContent>
    </S.CardCourse>
  )
}
