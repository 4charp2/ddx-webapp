import styled from 'styled-components'
import { Heading, Title } from '../../App.styles'

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`

export const LogoImg = styled.img`
  width: 22px;
  height: 20px;
`
export const LogoText = styled.p`
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.44px;
  color: #202439;
`
export const CourseBlock = styled.div``
export const CourseElement = styled.div``

export const Video = styled.div`
  position: relative;
  width: 358px;
  height: 201px;
  border-radius: 16px;
  margin-top: 25px;
  margin-bottom: 35px;
  background-size: cover;
  background: linear-gradient(
    180deg,
    rgba(32, 36, 57, 0) 0%,
    rgba(45, 45, 45, 0.5) 44.73%,
    rgba(237, 105, 41, 0.5) 100%
  );

  & iframe {
    border: none;
  }
`

export const VideoPlaySvg = styled.img`
  width: 46.68px;
  height: 46.68px;
  position: absolute;
  top: 77.16px;
  left: 155.66px;
`

export const TitleBlock = styled.div`
  color: #202439;
  text-align: center;
`

export const CourseTitle = styled(Title)``
export const CourseHeading = styled(Heading)``

export const CardsBlock = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const BlockBottom = styled.div`
margin-top: 25px;
`
export const BottomHeading = styled(Title)`
font-size: 18px;
text-align: center;
margin-bottom: 25px;

`
export const BottomCard = styled.div`  width: 358px;
  height: 150px;
  position: relative;
`

export const CardImg = styled.img`
  width: 358px;
  height: 150px;
  border-radius: 16px;
`
export const CardTitle = styled(Title)`
  color: #ffffff;
`

export const CardHeading = styled(Heading)`
  color: #ffffff;
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`


export const ContentArrow = styled.img`
  width: 29.42px;
  height: 29.42px;
  top: 15.58px;
`
