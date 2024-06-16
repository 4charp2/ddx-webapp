import styled from 'styled-components'
import { Heading, Title } from '../../App.styles'

export const Workout = styled.div``

export const Course = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BackButton = styled.img``

export const CourseHeading = styled(Heading)`
  color: #20243980;
`

export const CartButton = styled.img``

export const WorkoutTitle = styled(Title)`
  color: #1ba3c4;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 30px;
`
export const WorkoutBlock = styled.ul`
  display: flex;
  gap: 5px;
  margin-top: 15px;
  margin-bottom: 30px;
`

export const CardWorkout = styled.ul``

export const BlockCardLock = styled.li`
  width: 116px;
  height: 74px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #20243940;

`

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardTitle = styled(Title)`
  font-size: 12px;
  color: #20243940;
`
export const CardTopSvg = styled.img``

export const BlockCardDone = styled(BlockCardLock)`
  background: #1ba3c480;
  border: none;
`

export const BlockCardActive = styled(BlockCardDone)`
  background: #1ba3c4;
`
export const CardTitleWhite = styled(CardTitle)`
  color: #ffffff;
`
