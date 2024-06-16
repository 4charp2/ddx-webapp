import * as S from './Card.styles'

export const Card = ({
  title,
  heading,
  complexity,
  id,
  typeCourse,
  typeWorkout,
  typeExercise,
}) => {
  const createComplexityArray = (complexity) => {
    let complexityAr = []

    if (complexity === 1) {
      complexityAr = ['true', 'false', 'false', 'false', 'false']
    } else if (complexity === 2) {
      complexityAr = ['true', 'true', 'false', 'false', 'false']
    } else if (complexity === 3) {
      complexityAr = ['true', 'true', 'true', 'false', 'false']
    } else if (complexity === 4) {
      complexityAr = ['true', 'true', 'true', 'true', 'false']
    } else {
      complexityAr = ['true', 'true', 'true', 'true', 'false']
    }
    return complexityAr
  }
  const createdDifficultArr = createComplexityArray(complexity)
  console.log(createdDifficultArr)

  return (
    <S.CardCourse $typeWorkout={typeWorkout}>
      {typeCourse && <S.CardImg src={`/img/${id}.png`}></S.CardImg>}
      {typeExercise && <S.CardImg src={`/img/${id}.png`}></S.CardImg>}

      <S.CardTop>
        <S.CardHeading $typeWorkout={typeWorkout}>Cложность:</S.CardHeading>
        <S.TopBlock>
          {createdDifficultArr?.map((el, index) => (
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
