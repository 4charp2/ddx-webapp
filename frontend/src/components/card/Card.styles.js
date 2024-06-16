import styled from 'styled-components'
import { Heading, Title } from '../../App.styles'

export const CardCourse = styled.li`
  width: 358px;
  height: 150px;
  position: relative;

  ${({ $typeWorkout }) =>
    $typeWorkout &&
    'background: linear-gradient(180deg, rgba(26, 163, 196, 0.1) 0%, rgba(25, 157, 189, 0.1) 100%);   border-radius: 16px;'}
`

export const CardImg = styled.img`
  width: 358px;
  height: 150px;
  border-radius: 16px;
`

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 20px;
  left: 20px;
`

export const CardHeading = styled(Heading)`
  color: #ffffff;

  ${({ $typeWorkout }) => $typeWorkout && 'color: #1BA3C4;'}
`

export const TopBlock = styled.div`
  display: flex;
  gap: 2px;
`

export const TopComplexity = styled.img`
  width: 9px;
  height: 12px;

  ${({ $complexity }) => $complexity && 'fill: #ffffff;opacity: 1;'}
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

export const CardTitle = styled(Title)`
  color: #ffffff;

  ${({ $typeWorkout }) => $typeWorkout && 'color: #1BA3C4;'}
`

export const ContentArrow = styled.img`
  width: 29.42px;
  height: 29.42px;
  top: 15.58px;
`
