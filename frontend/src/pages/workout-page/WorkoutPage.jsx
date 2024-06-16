// import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Navigation } from '../../components/navigation/Navigation'
import * as S from './WorkoutPage.styles'
import { Card } from '../../components/card/Card'

export const WorkoutPage = () => {
  // const { id } = useParams()
  const buttonNavWorkout = ['Неделя 1', 'Неделя 2', 'Неделя 3', 'Неделя 4']

  // const workoutCards = [
  //   { day: 'День 1', workout: 'Пулл', status: 'check' },
  //   { day: 'День 2', workout: 'Пуш', status: 'select' },
  //   { day: 'День 3', workout: 'Ноги', status: 'lock' },
  // ]

  // const [isStatusCard, setIsStatusCard] = useState('select')

  // const filterClickHandler = (id) => {
  //   setIsStatusCard(isStatusCard === id ? null : id)
  // }

  const exercises = [
    {
      id: 8,
      title: 'Старт',
      heading: 'День 1 | Фитнесс-тест',
      complexity: ['true', 'false', 'false', 'false', 'false'],
    },
    {
      id: 9,
      title: 'Сезон 1',
      heading: 'День 1-30',
      complexity: ['true', 'true', 'false', 'false', 'false'],
    },
    {
      id: 10,
      title: 'Сезон 2',
      heading: 'День 30-60',
      complexity: ['true', 'true', 'true', 'true', 'false'],
    },
    {
      id: 11,
      title: 'Жиросжигание ',
      heading: 'День 1-30',
      complexity: ['true', 'true', 'true', 'false', 'false'],
    },
  ]
  
  return (
    <S.Workout>
      <S.Course>
        <S.BackButton src="/img/back-button.svg" />
        <S.CourseHeading>Зал</S.CourseHeading>
        <S.CartButton src="/img/cart-button.svg" />
      </S.Course>
      <S.WorkoutTitle>Базовый курс</S.WorkoutTitle>
      <Navigation buttonNav={buttonNavWorkout}  typeWorkout={true} />
      <S.WorkoutBlock>
        <S.BlockCardDone>
          <S.CardTop>
            <S.CardTitleWhite>День 1</S.CardTitleWhite>
            <S.CardTopSvg src="/img/check.svg" />
          </S.CardTop>
          <S.CardTitleWhite>Пулл</S.CardTitleWhite>
        </S.BlockCardDone>

        <S.BlockCardActive>
          <S.CardTop>
            <S.CardTitleWhite>День 2</S.CardTitleWhite>
          </S.CardTop>
          <S.CardTitleWhite>Пуш</S.CardTitleWhite>
        </S.BlockCardActive>

        <S.BlockCardLock>
          <S.CardTop>
            <S.CardTitle>День 3</S.CardTitle>
            <S.CardTopSvg src="/img/lock.svg" />
          </S.CardTop>
          <S.CardTitle>Ноги</S.CardTitle>
        </S.BlockCardLock>
      </S.WorkoutBlock>
      <S.CardWorkout>
      <Card
        title='Разминка'
        heading='Делай его перед каждой тренировкой'
        complexity={[true, false, false, false]}
        typeWorkout={true}
      />
      </S.CardWorkout>
      <S.CardExercise>
      {exercises.map((exerciseCard) => (
                <Card
                  key={exerciseCard.id}
                  title={exerciseCard.title}
                  heading={exerciseCard.heading}
                  complexity={exerciseCard.complexity}
                  id={exerciseCard.id}
                  typeExercise={true}
                ></Card>
              ))}
      </S.CardExercise>

      {/* {workoutCards.map((workoutCard, index) => (
          <S.BlockCard
            $background={isStatusCard === workoutCard.status}
            key={index}
            onClick={() => {
              return filterClickHandler(workoutCard.status)
            }}
  
          >
            <S.CardTop>
              <S.CardTitle>{workoutCard.day}</S.CardTitle>
              {workoutCard.status === 'check' ? (
                <S.CardTopSvg src="/img/check.svg" />
              ) : workoutCard.status === 'lock' ? (
                <S.CardTopSvg src="/img/lock.svg" />
              ) : (
                ''
              )}
            </S.CardTop>
            <S.CardTitle>{workoutCard.workout}</S.CardTitle>
          </S.BlockCard>
        ))} */}
    </S.Workout>
  )
}
