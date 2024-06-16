import * as S from './MainPage.styles'
import { Navigation } from '../../components/navigation/Navigation'
import { Card } from '../../components/card/Card'
import {
  useGetCategoriesQuery,
  useGetTagCategoryQuery,
  useGetTagProgramQuery,
} from '../../api/DdxApi'
import { useState } from 'react'

export const MainPage = () => {
  const [currentCourse, setCurrentCourse] = useState('CHALLENGE')

  const { data: button } = useGetCategoriesQuery()
  const { data: category } = useGetTagCategoryQuery({
    tag_category: currentCourse,
  })
  const { data: programs } = useGetTagProgramQuery({
    tag_category: currentCourse,
  })

  return (
    <>
      <S.Logo>
        <S.LogoImg
          src="/img/logo.svg"
          alt="logo"
        />
        <S.LogoText>DDX FITNESS</S.LogoText>
      </S.Logo>
      <Navigation
        buttonNav={button?.categories}
        setCurrentCourse={setCurrentCourse}
      />
      <S.CourseBlock>
        <S.CourseElement key={category?.categories.id}>
          <S.Video>
            <iframe
              width="358px"
              height="201px"
              src="/img/challenge.jpg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <S.VideoPlaySvg src="/img/play.svg" />
          </S.Video>
          <S.TitleBlock>
            <S.CourseTitle>{category?.categories.name}</S.CourseTitle>
            <S.CourseHeading>Выберите программу</S.CourseHeading>
          </S.TitleBlock>
          <S.CardsBlock>
            {programs?.programs.map((program) => (
              <Card
                key={program.id}
                title={program.name}
                heading={program.description}
                complexity={program.dificult}
                id={program.id}
                typeCourse={true}
              ></Card>
            ))}
          </S.CardsBlock>
          <S.BlockBottom>
            <S.BottomHeading>
               Индвидуальный план <br/> тренировок с тренером
            </S.BottomHeading>
            <S.BottomCard>
              <S.CardImg src={`/img/trener.png`}></S.CardImg>
              <S.CardContent>
                <S.ContentLeft>
                  <S.CardTitle>
                    Доверь свое преображение профессионалу
                  </S.CardTitle>
                  <S.CardHeading>Пояснение</S.CardHeading>
                </S.ContentLeft>
                <S.ContentArrow src="/img/arrow.svg"></S.ContentArrow>
              </S.CardContent>
            </S.BottomCard>
          </S.BlockBottom>
        </S.CourseElement>
      </S.CourseBlock>
    </>
  )
}
