import { useNavigate } from 'react-router-dom'
import * as S from './MainPage.styles'
import { Navigation } from '../../components/navigation/Navigation'
import { Card } from '../../components/card/Card'
// import { useState } from 'react'

const buttonNavMain = [
  'CHALLENGE', 'ДОМ', 'ГАНТЕЛИ', 'ЗАЛ'
]

const workouts = [
  {
    id: 1,
    url: '/img/challenge.jpg',
    name: 'CHALLENGE',
  },
  // {
  //   id: 2,
  //   url: '/img/gym.jpg',
  //   name: 'Зал',
  //   courses: [
  //     {
  //       id: 1,
  //       title: 'Базовый курс',
  //       heading: 'Количество дней: 30',
  //       complexity: 1,
  //     },
  //     {
  //       id: 2,
  //       title: 'Классический курс',
  //       heading: 'День 30-60',
  //       complexity: 3,
  //     },
  //     { id: 3, title: 'PRO курс', heading: 'День 1-30', complexity: 5 },
  //   ],
  // },
]
const courses = [
  {
    id: 1,
    title: 'Старт',
    heading: 'День 1 | Фитнесс-тест',
    complexity: ['true', 'false', 'false', 'false', 'false'],
  },
  {
    id: 2,
    title: 'Сезон 1',
    heading: 'День 1-30',
    complexity: ['true', 'true', 'false', 'false', 'false'],
  },
  {
    id: 3,
    title: 'Сезон 2',
    heading: 'День 30-60',
    complexity: ['true', 'true', 'true', 'true', 'false'],
  },
  {
    id: 4,
    title: 'Жиросжигание ',
    heading: 'День 1-30',
    complexity: ['true', 'true', 'true', 'false', 'false'],
  },
]

export const MainPage = () => {
  const navigate = useNavigate()
  // const [isActiveCourse, setIsActiveCourse] = useState('CHALLENGE')

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
      <S.CourseBlock>
        {workouts.map((workout) => (
          <S.CourseElement key={workout.id}>
            <S.Video>
              <iframe
                width="358px"
                height="201px"
                src={workout.url}
                // {convertYouTubeLink(workout.url)}
                title={workout.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <S.VideoPlaySvg src="/img/play.svg" />
            </S.Video>
            <S.TitleBlock>
              <S.CourseTitle>{workout.name}</S.CourseTitle>
              <S.CourseHeading>Выберите программу</S.CourseHeading>
            </S.TitleBlock>
            <S.CardsBlock>
              {courses.map((courseCard) => (
                <Card
                  key={courseCard.id}
                  title={courseCard.title}
                  heading={courseCard.heading}
                  complexity={courseCard.complexity}
                  id={courseCard.id}
                  typeCourse={true}
                ></Card>
              ))}
            </S.CardsBlock>
          </S.CourseElement>
        ))}
      </S.CourseBlock>
    </>
  )
}
