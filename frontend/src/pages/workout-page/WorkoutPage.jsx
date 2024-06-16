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

  return (
    <S.Workout>
      <S.Course>
        <S.BackButton src="/img/back-button.svg" />
        <S.CourseHeading>Зал</S.CourseHeading>
        <S.CartButton src="/img/cart-button.svg" />
      </S.Course>
      <S.WorkoutTitle>Базовый курс</S.WorkoutTitle>
      <Navigation buttonNav={buttonNavWorkout} />
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
